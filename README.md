Event Utility
=============

Utility of native event listener implementation.

Usage
-----

### CommonJS

~~~ js
const {onEvent} = require('@taufik-nurrohman/event');

onEvent('resize', window, e => {
    console.log([
        window.innerHeight,
        window.innerWidth
    ]);
});
~~~

### ECMAScript

~~~ js
import {onEvent} from '@taufik-nurrohman/event';

onEvent('resize', window, e => {
    console.log([
        window.innerHeight,
        window.innerWidth
    ]);
});
~~~

Methods
-------

### event(name, options = {}, cache = false)

Create custom events with unique name.

~~~ js
let readyEvent = event('ready');
~~~

### events

List of custom events cache created by `event`.

~~~ js
console.log(events);
~~~

### fireEvent(event, node, options = {}, cache = false)

~~~ js
onEvent('DOMContentLoaded', document, event => {
    fireEvent('ready', document);
});
~~~

### fireEvents(events, node, options = {}, cache = false)

### offEvent(event, node, then)

~~~ js
offEvent('ready', document, onDocumentReady);
~~~

### offEventDefault(event)

### offEventImmediatePropagation(event)

### offEventPropagation(event)

### offEvents(events, node, then)

### onEvent(event, node, then, options = false)

~~~ js
function onDocumentReady() {
    console.log('Document is ready!');
}

onEvent('ready', document, onDocumentReady);
~~~

### onEvents(events, node, then, options = false)