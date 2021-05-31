import animate from './animate';

/**
 * 
 * The `flash()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.flash(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function flash(element, options) {
    options = options ? options : {};

    return animate(element, 'flash', options);
}
    
export default flash;