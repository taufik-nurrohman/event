import {fromArray} from '@taufik-nurrohman/from';
import {isSet} from '@taufik-nurrohman/is';
import {toArray} from '@taufik-nurrohman/to';

export const events = {};

export const event = name => {
    if (isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name));
};

export const fireEvent = (names, node) => {
    let out = [];
    toArray(names).forEach(name => {
        out.push(node.dispatchEvent(event(name)));
    });
    return fromArray(out);
};

export const offEvent = (names, node, fn) => {
    toArray(names).forEach(name => node.removeEventListener(name, fn));
};

export const onEvent = (names, node, fn, options = false) => {
    toArray(names).forEach(name => node.addEventListener(name, fn, options));
};
