import animate from './animate';

/**
 * 
 * The `rubberBand()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.rubberBand(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function rubberBand(element, options) {
    options = options ? options : {};

    return animate(element, 'rubberBand', options);
}
    
export default rubberBand;