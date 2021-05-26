/**
 * 
 * The `before()` function inserts the specified `element` in front of (before) the specified `target`.
 * 
 * Category: dom
 * 
 * ```js
 * __.dom.before(element, target);
 * ```
 * 
 * @param {Element} element
 * @param {Element} target
 * @returns {Element}
 */
function before(element, target) {
    return target.insertAdjacentElement('beforebegin', element);
}
    
export default before;