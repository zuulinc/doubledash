import isUndefined from '../lang/isUndefined';

function prev(element, selector) {
    let previous = element.previousElementSibling

    if (isUndefined(selector)) {
        return previous;
    }

    while (previous) {
      if (previous.matches(selector)) {
        return [previous]
      }

      previous = previous.previousElementSibling
    }

    return []
}

export default prev;