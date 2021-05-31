import animate from './animate';

/**
 * 
 * The `swing()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.swing(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function swing(element, duration = '1s') {
    
    return animate(element, 'swing', {
        duration: duration
    });

}
    
export default swing;