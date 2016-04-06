# cc-base-app-template
A base application template for an AngularJS single page application, with gulp build tasks and test runner.

This is a template. There is a very bare bones single page [AngularJS](http://angularjs.org) 1.5 application, written with ES2015. It 
includes [UI-Router](https://angular-ui.github.io/ui-router/site/#/api/ui.router), [UI-Bootstrap](https://angular-ui.github.io/bootstrap/),
and [Angular-Block-UI](https://github.com/McNull/angular-block-ui). The build process utilizes many separate [GulpJS](http://gulpjs.com)
tasks doing everything from compiling a stylesheet from custom [LESS](http://lesscss.org) to transpiling the ES2015 with [Babel](https://babeljs.io/),
to pulling it all together with [Browserify](http://browserify.org) and [gulp-usemin](https://github.com/zont/gulp-usemin), sourcemaps and
all.

### Pre-Requisites
- [Node & NPM](https://nodejs.org)
- [Bower](http://bower.io)

All app source is located in the 'src' directory at the root of this project. All gulp tasks are located in the 'gulp/tasks' directory.
When built, final code resides in the 'dist' directory.

### Get Up And Running
- Download the template via the [zip file download](https://github.com/cutterbl/cc-base-app-template/archive/master.zip)
- At a command line prompt, run 'bower install'
- At a command line prompt, run 'npm install' (use sudo if necessary)
- At a command line prompt, run 'gulp'

The 'gulp' command will run the default task, building the project from source and starting a local node server on port 8080.

Running 'gulp test' will run jasmine tests located in the 'src' directory.
