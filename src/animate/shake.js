import animate from './animate';

/**
 * 
 * The `shake()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.shake(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function shake(element, options) {
    options = options ? options : {};

    return animate(element, 'shake', options);
}
    
export default shake;