import animate from './animate';

/**
 * 
 * The `pulse()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.pulse(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function pulse(element, duration = '1s') {
    
    return animate(element, 'pulse', {
        duration: duration
    });

}
    
export default pulse;