
function isUndefined(variable) {
    return Object.prototype.toString.call(variable) === '[object Undefined]';
}

export default isUndefined;