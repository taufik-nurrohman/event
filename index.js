// This file is in sync with `index.mjs` file to enable CommonJS module loader feature.
// If you want to add/remove something here, make sure to do it in `index.mjs` file first.
($$ => {
    const {fromArray} = require('@taufik-nurrohman/from');
    const {isSet} = require('@taufik-nurrohman/is');
    const {toArray} = require('@taufik-nurrohman/to');
    const events = {};
    const event = (name, opt = {}) => {
        if (isSet(events[name])) {
            return events[name];
        }
        return (events[name] = new Event(name, opt));
    };
    const fireEvent = (names, node) => {
        let out = [];
        toArray(names).forEach(name => {
            out.push(node.dispatchEvent(event(name)));
        });
        return fromArray(out);
    };
    const offEvent = (names, node, fn) => {
        toArray(names).forEach(name => node.removeEventListener(name, fn));
    };
    const onEvent = (names, node, fn, options = false) => {
        toArray(names).forEach(name => node.addEventListener(name, fn, options));
    };
    $$.event = event;
    $$.events = events;
    $$.fireEvent = fireEvent;
    $$.offEvent = offEvent;
    $$.onEvent = onEvent;
})(exports || window || {});
