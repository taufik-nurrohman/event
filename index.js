const {isSet} = require('@taufik-nurrohman/is');

const event = (name, options = {}) => {
    if (isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

const events = {};

const fireEvent = (name, node) => {
    node.dispatchEvent(event(name));
};

const fireEvents = (names, node) => {
    names.forEach(name => fireEvent(name, node));
};

const offEvent = (name, node, then) => {
    node.removeEventListener(name, then);
};

const offEventDefault = e => e && e.preventDefault();
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
    offEventPropagation,
    offEvents,
    onEvent,
    onEvents
});
