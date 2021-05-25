
function findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector)
}

export default findOne;