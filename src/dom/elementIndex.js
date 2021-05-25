
function index(element) {
    if (!element)
        return -1;

    let i = 0;
    do {
        i++;
    } while (element = element.previousElementSibling);
    
    return i-1;
}

export default index;
