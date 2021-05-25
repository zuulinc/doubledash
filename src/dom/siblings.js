
function siblings(element) {
    return [].concat(...element.parentNode.children).filter(child => child !== element)
}

export default siblings;