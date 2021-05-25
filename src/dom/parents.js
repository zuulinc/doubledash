import isUndefined from '../lang/isUndefined';

const NODE_TEXT = 3

function parents(element, selector) {
    const parents = []

    let noSelector = isUndefined(selector);

    let ancestor = element.parentNode

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (noSelector) {
            parents.push(ancestor)
        } else if (ancestor.matches(selector)) {
            parents.push(ancestor)
        }

        ancestor = ancestor.parentNode
    }

    return parents
}

export default parents;