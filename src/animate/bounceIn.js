import animate from './animate';

/**
 * 
 * The `bounceIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.bounceIn(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction=''] down|left|right|up
 */
function bounceIn(element, duration = '1s', direction = '') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);

    let animation = 'bounceIn' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default bounceIn;