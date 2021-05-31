import animate from './animate';

/**
 * 
 * The `slideIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.slideIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }
 */
 function slideIn(element, options) {
    options = options ? options : {};

    let animation = 'slideIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animation = animation + 'Down'

    return animate(element, animation, options);
}
    
export default slideIn;