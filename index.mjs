import {isSet} from '@taufik-nurrohman/is';

export const event = (name, options, cache) => {
    if (cache && isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

export const events = {};

export const fireEvent = (name, node, options, cache) => {
    node.dispatchEvent(event(name, options, cache));
};

export const fireEvents = (names, node, options, cache) => {
    names.forEach(name => fireEvent(name, node, options, cache));
};

export const offEvent = (name, node, then) => {
    node.removeEventListener(name, then);
};

export const offEventDefault = e => e && e.preventDefault();
export const offEventImmediatePropagation = e => e && e.stopImmediatePropagation();
export const offEventPropagation = e => e && e.stopPropagation();

export const offEvents = (names, node, then) => {
    names.forEach(name => offEvent(name, node, then));
};

export const onEvent = (name, node, then, options = false) => {
    node.addEventListener(name, then, options);
};

export const onEvents = (names, node, then, options = false) => {
    names.forEach(name => onEvent(name, node, then, options));
};