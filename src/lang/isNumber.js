 
function isNumber(variable) {
    return Object.prototype.toString.call(variable) === '[object Number]';
}

export default isNumber;