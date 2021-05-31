import animate from './animate';

/**
 * 
 * The `shake()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.shake(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function shake(element, duration = '1s') {
    
    return animate(element, 'shake', {
        duration: duration
    });

}
    
export default shake;