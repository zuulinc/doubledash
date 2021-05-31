import animate from './animate';

/**
 * 
 * The `wobble()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.wobble(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function wobble(element, duration = '1s') {
    
    return animate(element, 'wobble', {
        duration: duration
    });

}
    
export default wobble;