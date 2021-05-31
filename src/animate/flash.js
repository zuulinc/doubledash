import animate from './animate';

/**
 * 
 * The `flash()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.flash(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function flash(element, duration = '1s') {
    
    return animate(element, 'flash', {
        duration: duration
    });

}
    
export default flash;