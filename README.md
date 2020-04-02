![Build Template](https://github.com/wirecard/docs-template/workflows/Build%20Template/badge.svg)
![Vale](https://github.com/wirecard/docs-template/workflows/Vale/badge.svg)

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

### Config
The main configuration file for the toolchain is placed in the content root and named `config.yaml`.
This file allows to change all the variables that influence the creation of the documentation, such as
multipage level, blacklist files, exclude lists for the search index, etc.

#### Extensions
The config allows to specify which extensions should be used or excluded.
If you wish to use a certain extension, add it to the config under `extensions.enable** and use the class name of the extension.

**Example**
Include the extension named `Toolchain::TestExtension` in the config:
```yaml
extensions:
  enable:
    - TestExtension
```

#### Processes
Including/excluding processes for the Pre or Post stage works the same as including/excluding extensions.

**Example**
Including the extensions named `Toolchain::Pre::PreProcessTest` and `Toolchain::Post::PostProcessTest` in the config:
```yaml
processes:
  pre:
    enable:
      - PreProcessTest
  post:
    enable:
      - PreProcessTest
```

#### Checkers
##### Blacklist Pattern Checker
The `PatternBlacklist` reads the blacklist file from the config (`checkers.pattern.blacklist`; default `blacklist.txt`)
containing a list of words and patterns that are invalid (i.e. must not be used in the documentation).

### Logo
In order to include a custom logo, simply replace the file `content/images/logo.png`.

### Style
You can either change the CSS files directly, or use the [SASS/SCSS pipeline](style/) in `style/`.

| **File**                  | **Usage**                |
|---------------------------|--------------------------|
| `main.css`                | General styling          |
| `font-awesome.css`        | Font Awesome icons       |
| `coderay-asciidoctor.css` | Source code highlighting |

#### CDN
By default, Font Awesome is loaded via CDN.
This template serves FontAwesome with the other stylesheets and fonts.

Steps to disable loading via CDN:
1. add `font-awesome.css` to the `css/` folder 
2. the Font Awesome font files to `fonts/`
3. add the following to your `index.adoc` below `:icons: font`:
```
:!iconfont-remote:
:iconfont-cdn: css/font-awesome.css
:!webfonts:
```

Remove these three lines to switch back to the Asciidoctor default and load FontAwesome via CDN again.

### Fonts
Please note that the Wirecard font _DINWebPro_ is licensed Wirecard CEE GmbH and **may not** be used for other projects unless a license is purchased.
For the monospace font family, the template default is _Ubuntu Mono**.

### Javascript
This template bundles a variety of Javascript solutions.

#### Vendor
* `jquery`: Version 3.4.1
* `lunr.js`: The toolchain creates a lunr search index and `lunr.js` the library to use the search index
* `swup.min.js`: Page switch (exchange content without navigating to a new page)

#### Custom
* `navigation.js`: Table of Content navigation
* `sample-tabs.js`: Tab views for XML, JSON and NVP samples of the same request
* `search.js`: Lunr frontend integration


### HTML
Injecting custom HTML is done via three HTML templates:
1. `docinfo.html`: HTML header code
2. `docinfo-search.html`: HTML Table of Content, Search overlay and Logo stubs
3. `docinfo-footer.html`: HTML footer code
