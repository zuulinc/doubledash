import animate from './animate';

/**
 * 
 * The `heartBeat()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.heartBeat(element, duration);
 * ```
 * 
 * @param {Element} element
 * @param {string} duration
 */
function heartBeat(element, duration = '1s') {
    
    return animate(element, 'heartBeat', {
        duration: duration
    });

}
    
export default heartBeat;