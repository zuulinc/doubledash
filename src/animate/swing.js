import animate from './animate';

/**
 * 
 * The `swing()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.swing(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function swing(element, options) {
    options = options ? options : {};

    return animate(element, 'swing', options);
}
    
export default swing;