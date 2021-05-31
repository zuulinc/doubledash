import animate from './animate';

/**
 * 
 * The `slideOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.slideOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }
 */
 function slideOut(element, options) {
    options = options ? options : {};

    let animation = 'slideOut';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animation = animation + 'Down'

    return animate(element, animation, options);
}
    
export default slideOut;