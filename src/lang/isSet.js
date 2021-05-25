import isUndefined from './isUndefined';
import isNull from './isNull';

function isSet(variable) {
    return !isUndefined(variable) && !isNull(variable);
}

export default isSet;