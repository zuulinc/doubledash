import isUndefined from '../lang/isUndefined';

function children(element, selector) {
    if (isUndefined(selector)) {
        return [].concat(...element.children);
    }

    return [].concat(...element.children).filter(child => child.matches(selector))
}

export default children;