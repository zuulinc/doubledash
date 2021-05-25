
function isNull(variable) {
    return Object.prototype.toString.call(variable) === '[object Null]';
}
    
export default isNull;