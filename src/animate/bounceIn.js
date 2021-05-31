import animate from './animate';

/**
 * 
 * The `bounceIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.bounceIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }
 */
function bounceIn(element, options) {
    options = options ? options : {};

    let animation = 'bounceIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default bounceIn;