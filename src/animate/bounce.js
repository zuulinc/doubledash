import animate from './animate';

/**
 * 
 * The `bounce()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.bounce(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function bounce(element, duration = '1s') {
    
    return animate(element, 'bounce', {
        duration: duration
    });

}
    
export default bounce;