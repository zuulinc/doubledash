import isArray from '../lang/isArray';

function create(tag, attributes, text) {
    const element = document.createElement(tag);


    for (const key in attributes) {
        let val = attributes[key];
        if (key === 'class') {
            if (isArray(val)) {
                element.classList.add(...val);
            } else {
                element.classList.add(val);
            }
        } else {
            element.setAttribute(key, val);
        }
    }

    if (text) {
        element.innerHTML = text;
    }

    return element;
}

export default create;