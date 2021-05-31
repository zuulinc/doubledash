import animate from './animate';

/**
 * 
 * The `rubberBand()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.rubberBand(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function rubberBand(element, duration = '1s') {
    
    return animate(element, 'rubberBand', {
        duration: duration
    });

}
    
export default rubberBand;