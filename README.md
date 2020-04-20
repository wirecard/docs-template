![Build Template](https://github.com/wirecard/docs-template/workflows/Build%20Template/badge.svg)
![End 2 End Testing](https://github.com/wirecard/docs-template/workflows/End%202%20End%20Testing/badge.svg)
![Vale](https://github.com/wirecard/docs-template/workflows/Vale/badge.svg)

# docs-template
Template repository for Wirecard documentation platforms with [wirecard/docs-toolchain](https://github.com/wirecard/docs-toolchain).

## Setup
```sh
bundle config --local path vendor/bundle
bundle install --jobs 4 --retry 3
bundle exec rake -T                      # see available rake tasks
```

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
Refer to the wiki to find out about the ways you can customize this template.

## Vale
This repository supports Vale to check the writing.
To run Vale, do:
```sh
bash .scripts/get_vale_styles.sh # run ONCE
vale content/
```

## End2End Tests
For frontend testing using Selenium, see [end2end/README.md](end2end/README.md).
