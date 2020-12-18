Event Utility
=============

Utility of native event listener implementation.

Usage
-----

### CommonJS

~~~ js
const {on} = require('@taufik-nurrohman/event');

on('resize', window, e => {
    console.log([
        window.innerHeight,
        window.innerWidth
    ]);
});
~~~

### ECMAScript

~~~ js
import {on} from '@taufik-nurrohman/event';

on('resize', window, e => {
    console.log([
        window.innerHeight,
        window.innerWidth
    ]);
});
~~~

Methods
-------

### event(name, options = {})

Create custom events with unique name. Duplicate event names will be ignored.

~~~ js
let readyEvent = event('ready');
~~~

### events

List of custom events created by `event`.

~~~ js
console.log(events);
~~~

### fire(event, node)

~~~ js
on('DOMContentLoaded', document, event => {
    fire('ready', event);
});
~~~

### off(event, node, then)

~~~ js
off('ready', document, onDocumentReady);
~~~

### on(event, node, then, options = false)

~~~ js
function onDocumentReady() {
    console.log('Document is ready!');
}

on('ready', document, onDocumentReady);
~~~
