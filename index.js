'use strict';

const mochadocRunner = require('mochadoc-runner');

const first = (values) => values[0];
const rest = (values) => Array.prototype.slice.call(values, 1);

function runNext(runnerOptions, done) {
    const nextOptions = first(runnerOptions);

    if (runnerOptions.length > 0) {
        console.log('Running Mochadoc for ' + nextOptions.name);

        mochadocRunner(nextOptions.options, function (error) {
            if (error) {
                console.log('An error occurred while attempting to build docs: ', nextOptions.name);
            }

            runNext(rest(runnerOptions), done);
        });
    } else if (typeof done === 'function') {
        done();
    }
}

function Mochadoc(options) {
    this.options = options;
}

Mochadoc.prototype = {
    apply: function (compiler) {
        compiler.plugin('emit', (function (compilation, done) {
            const options = this.options;

            const runnerOptions = Object.keys(options).map(function (key) {
                return {
                    name: key,
                    options: options[key]
                };
            });

            runNext(runnerOptions, done);
        }).bind(this));
    }
};

module.exports = Mochadoc;