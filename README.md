# cocos-es6-browserify

A simple [Cocos2d-HTML5](http://www.cocos2d-x.org) hello-world app written in ES6 (compiled using [Babel](https://babeljs.io/)) with dependency management using [Browserify](http://browserify.org/).

## Running the code
First, download and setup [cocos2d](http://www.cocos2d-x.org/download)

Then clone and setup the repo:
```bash
git clone https://github.com/FullR/cocos-es6-browserify.git
npm install # installs dependencies and creates cocos project
```

Then start developing
```bash
gulp # Start cocos, build, watch, rebuild
```

Other gulp tasks:
```
build - Compile/copy ES6 source files, resources, and cocos configuration files into the cocos project directory
start - Start the cocos project as-is without rebuilding
resources - Copy files from your res directory into the cocos project
```
