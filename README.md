# Webpack-Mochadoc #

A Webpack plugin for running Mochadoc against your existing test codebase.

Find me online:
- [@cm_stead](https://twitter.com/cm_stead)
- [ChrisStead.com](http://www.chrisstead.com)

## Setup ##

First install Webpack-Mochadoc globally from NPM:

`npm install webpack-mochadoc --save-dev`

Then add your runner configuration to your webpack config:

```
var webpack = require('webpack');
const Mochadoc = require('./index.js');

module.exports = {
  plugins: [
    new Mochadoc({
        test: {
            config: './.mochadocrc'
        }
    })
  ],
};
```

That's it!

## Configuring Mochadoc ##

The best way to configure Mochadoc is to follow the instructions on the [Mochadoc NPM Page](https://www.npmjs.com/package/mochadoc).

A typical `.mochadocrc` file will look like the following:

```
{
    "projectName": "My Groovy Project",
    "files": "./test/**/*.test.js",
    "dest": "./docs/api"
}
```

## Running Webpack-Mochadoc ##

Webpack-Mochadoc runs much like any other Webpack plugin. Running `webpack` will run all configured mochadoc tasks.  This will generate all documents as each configuration defines.

## Commit History ##

### v1.0.0 ###

- First Stable Release