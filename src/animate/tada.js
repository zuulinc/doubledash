import animate from './animate';

/**
 * 
 * The `tada()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.tada(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function tada(element, duration = '1s') {
    
    return animate(element, 'tada', {
        duration: duration
    });

}
    
export default tada;