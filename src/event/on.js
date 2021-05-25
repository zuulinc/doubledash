import { addHandler } from './helpers';

function on(element, eventName, selector, handler) {
    addHandler(element, eventName, selector, handler, false)
}

export default on;
