import animate from './animate';

/**
 * 
 * The `pulse()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.pulse(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function pulse(element, options) {
    options = options ? options : {};

    return animate(element, 'pulse', options);
}
    
export default pulse;