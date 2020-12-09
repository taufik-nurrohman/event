Event Utility
=============

Utility of native event listener implementation.

Usage
-----

### Browser

~~~ html
<script src="./@taufik-nurrohman/event/index.js"></script>
<script>
onEvent('resize', window, e => {
    console.log([
        window.innerHeight,
        window.innerWidth
    ]);
});
</script>
~~~

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

### event(name, opt = {})

Create custom events with unique name. Duplicate event names will be ignored.

~~~ js
import {event} from '@taufik-nurrohman/event';

let readyEvent = event('ready');
~~~

### events

List of custom events created by `event`.

~~~ js
import {events} from '@taufik-nurrohman/event';

console.log(events);
~~~

### fireEvent(name | names, node)

~~~ js
import {fireEvent} from '@taufik-nurrohman/event';

onEvent('DOMContentLoaded', document, event => {
    fireEvent('ready', event);
});
~~~

### offEvent(name | names, node, fn)

~~~ js
import {offEvent} from '@taufik-nurrohman/event';

offEvent('ready', document, onDocumentReady);
~~~

### onEvent(name | names, node, fn)

~~~ js
import {onEvent} from '@taufik-nurrohman/event';

function onDocumentReady() {
    console.log('Document is ready!');
}

onEvent('ready', document, onDocumentReady);
~~~
