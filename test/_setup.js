global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
global.$ = require('jquery')(window);
global.assert = require('chai').assert;
console.log("Loaded mocha setup")
