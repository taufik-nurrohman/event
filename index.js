const {isSet} = require('@taufik-nurrohman/is');

const event = (name, options = {}) => {
    if (isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

const events = {};

const fire = (name, node) => {
    node.dispatchEvent(event(name));
};

const off = (name, node, then) => {
    node.removeEventListener(name, then);
};

const on = (name, node, then, options = false) => {
    node.addEventListener(name, then, options);
};

Object.assign(exports || {}, {
    event,
    events,
    fire,
    off,
    on
});
