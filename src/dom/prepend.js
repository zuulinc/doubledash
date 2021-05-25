
function prepend(element, target) {
    return target.insertBefore(element, target.firstChild);
}
    
export default prepend;