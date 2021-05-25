
function isFunction(variable) {
    return Object.prototype.toString.call(variable) === '[object Function]';
}

export default isFunction;