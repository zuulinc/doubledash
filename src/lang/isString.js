
function isString(variable) {
    return Object.prototype.toString.call(variable) === '[object String]';
}

export default isString;