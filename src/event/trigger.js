import settings from './settings';
import isString from '../lang/isString';
import { getTypeEvent } from './helpers';

function trigger(element, eventName, args) {

    if (isString(eventName) || !element) {
        return
    }

    let evt = null;

    const typeEvent = getTypeEvent(eventName)
    const isNative = settings.nativeEvents.includes(typeEvent)
    
    args = args ? args : {};
    
    if (isNative) {
        evt = document.createEvent('HTMLEvents')
        evt.initEvent(typeEvent, true, true)
    } else {
        evt = new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            detail: args
        })
    }

    element.dispatchEvent(evt);

    return evt;
}
    
export default trigger;