Experimenting with js and slim

````
./setup.sh
gulp bower
ruby web.rb
````

todo:

- use gulp to minify and combine js and css files
- setup linting as part of gulp
- hook mocha test run into gulp
- write meaningful tests in mocha
- convert to using gulp with webpack to download dependencies and minify our code
- use babel to convert es6 syntax
- search dropdown autocomplete from dictionary?
- write a carousel from scratch
- use sass instead of css
- use protactor to write end to end tests (protactor is a layer on top of selenium) (see https://git.thoughtworks.net/dmutton/meeting-room-availability/tree/master/e2e-tests)
- use use data-based rendering instead of toggleClass in pineapple.js

done:

- hook everything into sinatra
- import css to slim
- import js to slim
- use bootstrap
- multiple pages
- modal (from scratch)
- modal (from bootstrap)
- gulp build
- bower dependencies import
- setup testing framework (mocha)

notes

In a one page app, you have to create and remove event listeners constantly. If you don't remove event listeners, then your memory usage increases over time "most one page apps over long periods of time become unresponsive"

Sizzle is the selector engine of jquery

Sprockets is the asset compilation pipeline in Rails. Use grunt (it came first ; config over code) OR gulp (code over config - my preference) to imitate what it does in javascript.

Modals - padding top right, button left, no-scroll, overflow: hidden

Starting with react- you can just skip all of this. It's kida a DSL tht compiles into javascript, handles its own eventing

Command-option-i open inspect viewer

$0 in console referes to the element that is selected in Inspect viewer

data-based rendering instead of storing application state in the DOM

preventDefault and stopPropigation are very important

To prevent the url going to example.com/# when you do href="#" do preventDefault.

Use browserify (current best according to Pat) instead of require.js (old) and put the require order in app.js or something- entry point

Always try to use one big uglified js file instead of many little ones, ebcause network calls are slow
