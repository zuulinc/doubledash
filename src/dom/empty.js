
function empty(element) {
    while(element.firstChild)
        element.removeChild(element.firstChild);
}
    
export default empty;