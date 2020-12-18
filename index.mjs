import {isSet} from '@taufik-nurrohman/is';

export const event = (name, options = {}) => {
    if (isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

export const events = {};

export const fire = (name, node) => {
    node.dispatchEvent(event(name));
};

export const off = (name, node, then) => {
    node.removeEventListener(name, then);
};

export const on = (name, node, then, options = false) => {
    node.addEventListener(name, then, options);
};
