import animate from './animate';

/**
 * 
 * The `bounceOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.bounceOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }
 */
function bounceOut(element, options) {
    options = options ? options : {};

    let animation = 'bounceOut';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default bounceOut;