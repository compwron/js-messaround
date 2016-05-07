global.jsdom = require('jsdom');
global.document = jsdom.jsdom('<html></html>');
global.window = document.defaultView;

global.chai = require('chai');
global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should();

console.log("Loaded mocha setup")
