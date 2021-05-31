import animate from './animate';

/**
 * 
 * The `zoomingIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.zoomingIn(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction=''] up|down|left|right
 */
 function zoomingIn(element, duration = '1s', direction = '') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);
    
    let animation = 'zoomingIn' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default zoomingIn;