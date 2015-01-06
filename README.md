# Frontend Elements

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bernardodiasc/elements?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This project is a collection of custom HTML5 elements. And a way to compile everything into HTML, CSS and JS files while developing.

The compilation step is by default with Gulp, and for development enviroment. This step can be done in several other ways, let us know if you have a different implementation.

To use this material, include with your frontend files and follow the instructions in each element template file about how import the element in the page. You'll notice that some elements have an API schema required, checkout if your system are able to use the suggested standards.

Checkout a sample output of the elements at [bernardodiasc.github.io/elements](http://bernardodiasc.github.io/elements).

## Setup

__Install Node, NPM, Gulp and other dependencies...__

1. Install Node.js
2. `sudo npm install`
3. `sudo npm install -g gulp`

_This install steps instructions need to be improved._

## How to use

Please checkout the __[HOWTO.md](./HOWTO.md)__ for futher usage instructions.

__Element instructions__

- [/assets/src/elements/collapsible](./assets/src/elements/collapsible)
- [/assets/src/elements/slideshow](./assets/src/elements/slideshow)

---

## Options available

- __Templates (HTML)__
  - [x] XSLT (XML)
  - [x] Swig (Json)
  - [ ] Jade (Json)
  - [ ] HAML (YAML)
  - [ ] Others...

- __Styles (CSS)__
  - [x] Sass
  - [ ] Less
  - [ ] Stylus

- __Scripts (JS)__
  - [x] Self executing anonymous functions
  - [ ] Browserify
  - [ ] Coffee
  - [ ] Others...

