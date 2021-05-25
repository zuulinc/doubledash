import isUndefined from '../lang/isUndefined';

function next(element, selector) {
    let next = element.nextElementSibling

    if (isUndefined(selector)) {
        return next;
    }

    while (next) {
        if (next.matches(selector)) {
            return [next]
        }

        next = next.nextElementSibling
    }

    return []
}

export default next;