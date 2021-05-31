import animate from './animate';

/**
 * 
 * The `slideIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.slideIn(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction='down'] up|down|left|right
 */
 function slideIn(element, duration = '1s', direction = 'down') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);
    
    let animation = 'slideIn' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default slideIn;