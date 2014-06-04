JS MVC Template
===============

This is a template to adopt MVC architecture for Google Maps JavaScript project 

Refer to: http://verekia.com/requirejs/build-simple-client-side-mvc-app-require-js

## Prerequisites

* NodeJS and npm (Node Packaged Modules)

* Node modules: requirejs, uglify-js

* [jQuery](http://jquery.com/)

## Start

* Change `app/config.template.js` as `app/config.js`, and set the configuration parameters as needed

* Add `<script src="http://maps.googleapis.com/maps/api/js?libraries=visualization&key={API KEY}&sensor=true"></script>` in `index.html`

## Build sample

*Windows*

* Build JavaScript: `{APP HOME}\node-modules\.bin\r.js.cmd -o build-js.js`
* Build CSS: `{APP HOME}\node-modules\.bin\r.js.cmd -o build-css.js`

