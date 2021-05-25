
function isJson(variable) {
    try {
        JSON.parse(variable);
    } catch (e) {
        return false;
    }
    return true;
}

export default isJson;