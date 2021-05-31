import animate from './animate';

/**
 * 
 * The `tada()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.tada(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function tada(element, options) {
    options = options ? options : {};

    return animate(element, 'tada', options);
}
    
export default tada;