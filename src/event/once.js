import { addHandler } from './helpers';

function once(element, eventName, selector, handler) {
    addHandler(element, eventName, selector, handler, true)
}

export default once;
