
function isBoolean(variable) {
    return Object.prototype.toString.call(variable) === '[object Boolean]';
}

export default isBoolean;
