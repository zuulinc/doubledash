import animate from './animate';

/**
 * 
 * The `bounce()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.bounce(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} options
 */
function bounce(element, options) {
    options = options ? options : {};
    
    return animate(element, 'bounce', options);
}
    
export default bounce;