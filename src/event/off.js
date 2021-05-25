import { removeHandler } from './helpers';

function off(element, eventName, eventHandler) {
    removeHandler(element, eventName, eventHandler);
}

export default off;