Experimenting with js and slim

````
./setup.sh
gulp bower
ruby web.rb
````

todo:

- use sass instead of css
- setup testing framework
- use gulp with bower and browserify flugins to download dependencies and minify our code
- browserify - precompile
- setup test coverage framework?
- setup linting
- search dropdown autocomplete from dictionary?
- carousel from scratch?

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
