import animate from './animate';

/**
 * 
 * The `rotateIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.rotateIn(element, duration, direction);
 * ```
 * 
 * @param {Element} element
 * @param {string} [duration=1s]
 * @param {string} [direction=''] downLeft|downRight|upLeft|upLeft
 */
 function rotateIn(element, duration = '1s', direction = '') {
    
    direction = direction.charAt(0).toUpperCase() + direction.slice(1);
    
    let animation = 'rotateIn' + direction;
    return animate(element, animation, {
        duration: duration
    });

}
    
export default rotateIn;