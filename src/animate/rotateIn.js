import animate from './animate';

/**
 * 
 * The `rotateIn()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.rotateIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 }
 */
 function rotateIn(element, options) {
    options = options ? options : {};

    let animation = 'rotateIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default rotateIn;