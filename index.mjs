import {isSet} from '@taufik-nurrohman/is';

export const event = (name, options = {}) => {
    if (isSet(events[name])) {
        return events[name];
    }
    return (events[name] = new Event(name, options));
};

export const events = {};

export const fireEvent = (name, node) => {
    node.dispatchEvent(event(name));
};

export const fireEvents = (names, node) => {
    names.forEach(name => fireEvent(name, node));
};

export const offEvent = (name, node, then) => {
    node.removeEventListener(name, then);
};

export const offEventDefault = e => e && e.preventDefault();
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
