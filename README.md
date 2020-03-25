# docs-template
Template repository for Wirecard documentation platforms with [wirecard/docs-toolchain](https://github.com/wirecard/docs-toolchain).

## How to use
The `content/` directory contains all the asciidoctor files and an `index.adoc` file,
which is the central file. All other files will be included in this `index.adoc`.
To build the content, another repository
([wirecard/docs-toolchain](https://github.com/wirecard/docs-toolchain)) is used.
This repository contains the _toolchain_ for this template.
In order to use the toolchain, use the button **Use this template** at the top,
this will create a fork of this template which you can customize.


## Customize
This template contains several built-in solutions, tests and styles which can be customized.

### Logo
In order to include a custom logo, simply replace the file `content/images/logo.png`.

### Style
You can either change the CSS files directly, or use the [SASS/SCSS pipeline](style/) in `style/`.

| **File**                  | **Usage**                |
|---------------------------|--------------------------|
| `main.css`                | General styling          |
| `font-awesome.css`        | Font Awesome icons       |
| `coderay-asciidoctor.css` | Source code highlighting |

### Fonts
Please note that the Wirecard font _DINWebPro_ is licensed Wirecard CEE GmbH and **may not** be used for other projects unless a license is purchased.
For the monospace font family, the template default is _Ubuntu Mono**.

### Javascript
This template bundles a variety of Javascript solutions.

**Vendor**:
* `jquery`: Version 3.4.1
* `lunr.js`: The toolchain creates a lunr search index and `lunr.js` the library to use the search index
* `swup.min.js`: Page switch (exchange content without navigating to a new page)

**Custom**:
* `navigation.js`: Table of Content navigation
* `sample-tabs.js`: Tab views for XML, JSON and NVP samples of the same request
* `search.js`: Lunr frontend integration


### HTML
Injecting custom HTML is done via three HTML templates:
1. `docinfo.html`: HTML header code
2. `docinfo-search.html`: HTML Table of Content, Search overlay and Logo stubs
3. `docinfo-footer.html`: HTML footer code
