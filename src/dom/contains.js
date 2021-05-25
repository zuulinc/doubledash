import isString from '../lang/isString';

function contains(element, child) {
    if (isString(child)) {
        return !!element.querySelector(child);
    } 

    return element !== child && element.contains(child);
}
    
export default contains;