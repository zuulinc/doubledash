import animate from './animate';

/**
 * 
 * The `jello()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.jello(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function jello(element, options) {
    options = options ? options : {};

    return animate(element, 'jello', options);
}
    
export default jello;