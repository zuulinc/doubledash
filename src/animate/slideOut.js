import animate from './animate';

/**
 * 
 * The `slideOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.slideOut(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction='down'] up|down|left|right
 */
 function slideOut(element, duration = '1s', direction = 'down') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);
    
    let animation = 'slideOut' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default slideOut;