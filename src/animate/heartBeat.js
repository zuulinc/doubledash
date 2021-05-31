import animate from './animate';

/**
 * 
 * The `heartBeat()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.heartBeat(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={}] { duration: 1s, delay: 0, repeat: 1 }
 */
function heartBeat(element, options) {
    options = options ? options : {};

    return animate(element, 'heartBeat', options);
}
    
export default heartBeat;