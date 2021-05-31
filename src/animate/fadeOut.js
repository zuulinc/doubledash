import animate from './animate';

/**
 * 
 * The `fadeOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.fadeOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }
 */
 function fadeOut(element, options) {
    options = options ? options : {};

    let animation = 'fadeOut';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default fadeOut;