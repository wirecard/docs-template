
document.pageswitch = {
  disabled: false,
  preload: true
}

/**
 * swup defaults except for linkSelector and containers
 */
if (document.pageswitch.disabled === false) {
  var options = {
    containers: ['#content'],
    cache: true,
    linkSelector:
      'a:not([data-no-swup]):not([href^="tel:"]):not([href^="mailto:"]):not([href*="://"]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    skipPopStateHandling: function (event) {
      if (event.state && event.state.source == 'swup') {
        return false;
      }
      return true;
    }
  };

  if (document.pageswitch.preload === true) {
    options.plugins = [new SwupPreloadPlugin()]
  }

  const swup = new Swup(options);

  if (document.pageswitch.preload === true) {
    var uniquePages = [];
    var preloadAnchors = [];
    document.querySelectorAll('#toc a').forEach((anchor) => {
      if (anchor.href && anchor.href.startsWith(window.location.origin)) {
        if (uniquePages.includes(anchor.pathname) === false) {
          uniquePages.push(anchor.pathname)
          preloadAnchors.push(anchor);
        }
      }
    });

    // values for slow loading in background. meanwhile onHover loading is also active
    var preloadTimer = 1000;
    const preloadInterval = 4000;

    document.addEventListener('readystatechange', () => {
      preloadAnchors.forEach((anchor) => {
        //preloadTimer += preloadInterval * (preloadInterval / (preloadTimer * 0.5));
        preloadTimer += preloadInterval;
        //preloadTimer += preloadInterval * (1 + preloadTimer / preloadInterval / preloadTimer);
        // use timer for attr, preload, remove, else preload fills up 4G browser pipeline
        setTimeout(() => {
          requestIdleCallback(() => {
            anchor.setAttribute('data-swup-preload', '');
            swup.preloadPages();
            anchor.removeAttribute('data-swup-preload');
          });
        }, preloadTimer);
      });

      if (document.readyState === 'complete') {
        setTimeout(swup.preloadPages, 1000);
      }
    });
  }


  /**
   * Remove Hash if we "page switch" to the same page but have no hash
   * Reset scroll position
   */
  swup.on('samePage', function (e) {
    console.log('_SWUUP: samePage');
    window.scrollTo(0, 0);
    removeHash();
  });

  /**
   * Scroll to targeted anchor when staying on same page during page switch
   */
  swup.on('samePageWithHash', function (e) {
    console.log('_SWUUP: samePageWithHash')
    const id = e.delegateTarget.hash.substr(1);
    scrollToHash(id);
  });

  /**
   * Scroll to target of link and change window title after page switches
   */
  swup.on('clickLink', function (e) {
    console.log('_SWUUP: clickLink')
    /* for deep links to anchors inside other pages */
    setTimeout(() => {
      console.log('clicklink timeout')
      refreshTitle();
      trackVisit();
    }, 350);
  });

  swup.on('contentReplaced', () => {
    console.log('_SWUUP: contentReplaced')

    reinitializeAfterPageSwitch();
    if (window.location.hash) {
      scrollToHash(window.location.hash.substring(1));
    }
  });

}

/**
 * Scrolls to hash==id of anchor without engaging scrollspy
 * @param {string} id id of element to scroll to
 */
function scrollToHash(id) {
  console.log('scrollToHash id: ' + id);
  document.scrollspy.disabled = true;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
    /* because scrollIntoView has no callback */
    setTimeout(() => {
      handleScrollEvent();
      document.scrollspy.disabled = false;
    }, 1000);
  }
  else {
    document.scrollspy.disabled = false;
  }
}

/**
 * Stub that will remove faulty behaviour for non http links
 */
function removePageswitch() {

}

/**
 * Reinitializes all frontend functionality that is required in div#content
 * after content replacement by a page switch
 */
function reinitializeAfterPageSwitch() {
  console.log('reinitializeAfterPageSwitch');

  const id = window.location.hash.substr(1);
  const pageID = window.location.pathname.slice(1, -5).replace(/.*\//, '');
  const idElement = document.querySelector('#toc_cb_' + id + ' + label > a');
  var pageAnchorElement = document.querySelector('#toc_cb_' + pageID + ' + label > a');
  console.log('contentReplaced. new page: ' + pageID);
  toggleBox(pageAnchorElement);
  initBoxes(pageAnchorElement);
  if (id) {
    initBoxes(idElement);
  }
  enableRequestDetailsHideShow();
  createSampleTabs();
  initializeScrollspy();
  initPageLinks();
  refreshTitle();
  window.scrollTo(0, 0);
  setBuildDate();
}

/**
 * Sets the window title according to page headlines found in the page
 * Format: Page - Section
 * Mainly for SEO purposes
 */
function refreshTitle() {
  console.log('refreshTitle');
  var pageTitle;
  const idMain = document.querySelector('div.sect2 > h3 > a.link');
  if (idMain) pageTitle = idMain.innerText;

  const idSecondary = document.querySelector('div.sect3 > h4 > a.link');
  if (window.location.hash && idSecondary) pageTitle += ' - ' + idSecondary.innerText;

  if (pageTitle) document.title = pageTitle;
}
