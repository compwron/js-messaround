global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
global.$ = require('jquery')(window);
console.log("Loaded mocha setup")
