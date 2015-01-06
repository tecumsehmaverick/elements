# HOW TO USE?!

First things first. This set of tools is useful to accomplish a task, that is pack code that output __HTML__, __CSS__ and __JS__.
The source of the output not necessarily is in the same language of the output, so the files sources have this naming convention __Templates__, __Styles__ and __Scripts__.

This project uses Gulp to automate tasks while developing in the frontend. All the result is static files.

__TL;DR:__ 

1. Open the file `gulpfile.js`
2. Choose one of the preprocessors tasks available for each layer
3. Run `gulp`

## Development

### Templates

When creating a page, we sure want to display some formated DATA, so the HTML is the language that browsers read, and HTML is a markup language used to format the DATA. At this point you already knows that handling a website data with pure HTML is not a good idea. While this is a frontend development tool, we are considering that the data will came from an API. Some common transport languages are __XML__, __Json__, __CSV__, __YAML__ and is also common transport the data in __Arrays__, __Objects__ and __Serialized strings__. Everything about this depend on the system you are working in.

This is important because this project is meant to be used with any content management system. We have Data sample working with template engines for static files, but template layer is usualy handled by content management systems, in that cases you'll not need to use the template folder and tasks provided in this source. The usage of the elements remains the same.

For static HTML result, checkout the [/assets/src/templates](./assets/src/templates) folder, there is 2 examples of how a page with elements looks like. The output is [/index.html](./index.html) ([bernardodiasc.github.io/elements](http://bernardodiasc.github.io/elements/)).

__Swig + Json__

- [/assets/src/templates/pages/index.html](./assets/src/templates/pages/index.html)
- [/assets/src/templates/pages/index.json](./assets/src/templates/pages/index.json)

__XSLT + XML__

- [/assets/src/templates/pages/index.xsl](./assets/src/templates/pages/index.xsl)
- [/assets/src/templates/pages/index.xml](./assets/src/templates/pages/index.xml)

### Styles

With Sass the suggested usage is to use `@import` in the __main.scss__ file. Also use overriding style method to change the presentation of the elements instead change on the element style file. This is because mostly of the style on the element is for layout purpose, some may break the element if changed.

If you have any suggestion, open an issue or send a PR. There is still some ground to cover in this layer standards. Compile styles can be made using Less or Stylus too, not yet available.

- [/assets/src/styles](./assets/src/styles)
- [/assets/src/styles/main.scss](./assets/src/styles/main.scss)

### Scripts

Right now the only method working is with seft-executing functions, and with loop on each matched element. This avoids conflicts when using more than one of the same element in the same page. Also allows use an element inside another, even this elements meant to handle data, behavior and styles not conflicting with each other is a good thing.

If you have any suggestion, open an issue or send a PR. There is still some ground to cover in this layer standards. Compile scripts can be made using Browserify or Coffee Script too, not yet available.

- [/assets/src/scripts](./assets/src/scripts)

### Elements

Templates, Styles and Scripts have general and pages purposes, Elements works in other way. Each element have a full set of code, and each have own instructions about the implementation. Go to [/assets/src/elements](./assets/src/elements) and check the docs. 

Basicaly you'll copy the elements packs in your frontend files, import and call the element template. On styles just import the elements styles in the main.scss file. The current setup will load all element scripts automaticaly.

You'll notice that each one have an API Schema required to work without changes. Hopefully your system allows you to adapt the API, if not, you'll need to hack a little bit the elements. This is not a good idea, but hey, its open source, use at will.

- [/assets/src/elements](./assets/src/elements)
- [/assets/src/elements/collapsible](./assets/src/elements/collapsible)
- [/assets/src/elements/slideshow](./assets/src/elements/slideshow)

---

### File structure

Let me explain how the folders are organized:

- [/assets](./assets) - _your workspace_
    - [/dist](./assets/dist) - _here goes the output files the browser needs, that is css, imgs, js, fonts, etc_
    - [/src](./assets/src) - _here goes the source files the developer needs_
        - [/elements](./assets/src/elements) - _elements container_
        - [/scripts](./assets/src/scripts) - _javascript preprocessor files or just javascript files_
        - [/styles](./assets/src/styles) - _css preprocessor files, compiles `main.scss`_
        - [/templates](./assets/src/templates) - _html preprocessor_
            - [/pages](./assets/src/templates/pages) - _compiles each page and output a html file in the root_
- [/gulp](./gulp) - _gulp tasks with module exports_
- [/gulpfile.js](./gulpfile.js) - _the gulpfile_
- [/package.json](./package.json) - _npm package file_
- [/saxon9he.jar](./saxon9he.jar) - _xslt template engine dependency for node_
- [/index.html](./index.html) - _sample output with static data_
