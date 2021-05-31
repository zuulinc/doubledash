import extend from '../lang/extend';

let animations = {
    show: ['fadeIn', 'bounceIn'],
    hide: ['fadeOut', 'bounceOut'],
    attention: ['bounce', 'shake']
};

/**
 * 
 * The `animate()` function fades the specified `element` in.
 * 
 * You muse include the animate.css file
 * 
 * ```js
 * __.animate.animate(element, animation, options);
 * ```
 * 
 * @param {Element} element
 * @param {string} animation
 * @param {object} options
 */
function animate(element, animation, options) {

    options = extend({
        duration: '1s'
    }, options);

    let isShowing = animations.show.includes(animation) || false;
    let attention = animations.attention.includes(animation);

    // We create a Promise and return it
    return new Promise((resolve, reject) => {

        if (!animations.show.includes(animation) && !animations.hide.includes(animation) && !animations.attention.includes(animation)) {
            console.error(`Animation ${animation} not found`);
            reject(`Animation ${animation} not found`);
            return;
        }

        let classes = ['animate', animation];

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
        
            if (!isShowing && !attention) {
                element.style.display = 'none';
            }
            
            element.classList.remove(...classes);

            resolve('Animation ended');
        }

        element.style.setProperty('--animate-duration', options.duration);

        element.addEventListener('animationend', handleAnimationEnd, { once: true });

        element.classList.add(...classes);

        if (window.getComputedStyle(element).display === "none") {
            element.style.display = '';
        }

        if (isShowing && !attention) {
            element.style.display = '';
        }

    });
}

export default animate;