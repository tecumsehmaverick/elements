# Frontend Elements

This project is a collection of custom HTML5 elements.

The compilation step is by default with Gulp, and for development enviroment. This step can be done in several other ways, let us know if you have a different implementation.

To use this material, include with your frontend files and follow the instructions in each element template file about how import the element in the page. You'll notice that some elements have an API schema required, checkout if your system are able to use the suggested standards.

Checkout a sample output of the elements at [bernardodiasc.github.io/elements](http://bernardodiasc.github.io/elements).

## Elements available

- [Collapsible](/assets/src/elements/collapsible)
- [Slideshow](/assets/src/elements/slideshow)

---

## Workflow

### Install Node, NPM, Gulp and other dependencies

1. Install Node.js
2. `sudo npm install`
3. `sudo npm install -g gulp`

### How to use

1. Open the file `gulpfile.js`
2. Read and edit lines `#` (_TBP_)
3. Run `gulp`

---

## Options

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