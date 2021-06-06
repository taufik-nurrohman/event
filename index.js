const {isSet} = require('@taufik-nurrohman/is');

const event = (name, options, cache) => {
    if (cache && isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

const events = {};

const fireEvent = (name, node, options, cache) => {
    node.dispatchEvent(event(name, options, cache));
};

const fireEvents = (names, node, options, cache) => {
    names.forEach(name => fireEvent(name, node, options, cache));
};

const offEvent = (name, node, then) => {
    node.removeEventListener(name, then);
};

const offEventDefault = e => e && e.preventDefault();
const offEventImmediatePropagation = e => e && e.stopImmediatePropagation();
const offEventPropagation = e => e && e.stopPropagation();

const offEvents = (names, node, then) => {
    names.forEach(name => offEvent(name, node, then));
};

const onEvent = (name, node, then, options = false) => {
    node.addEventListener(name, then, options);
};

const onEvents = (names, node, then, options = false) => {
    names.forEach(name => onEvent(name, then, options));
};

Object.assign(exports, {
    event,
    events,
    fireEvent,
    fireEvents,
    offEvent,
    offEventDefault,
    offEventImmediatePropagation,
    offEventPropagation,
    offEvents,
    onEvent,
    onEvents
});
