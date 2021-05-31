import animate from './animate';

/**
 * 
 * The `zoomingOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.zoomingOut(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction=''] up|down|left|right
 */
 function zoomingOut(element, duration = '1s', direction = '') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);
    
    let animation = 'zoomingOut' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default zoomingOut;