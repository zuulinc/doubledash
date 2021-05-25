
function isArray(variable) {
    return Object.prototype.toString.call(variable) === '[object Array]';
}

export default isArray;