import animate from './animate';

/**
 * 
 * The `jello()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.jello(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function jello(element, duration = '1s') {
    
    return animate(element, 'jello', {
        duration: duration
    });

}
    
export default jello;