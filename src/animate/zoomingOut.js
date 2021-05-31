import animate from './animate';

/**
 * 
 * The `zoomingOut()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.zoomingOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }
 */
 function zoomingOut(element, options) {
    options = options ? options : {};

    let animation = 'zoomingOut';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default zoomingOut;