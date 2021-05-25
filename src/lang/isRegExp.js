
function isRegExp(variable) {
    return Object.prototype.toString.call(variable) === '[object RegExp]';
}

export default isRegExp;