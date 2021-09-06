export function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
export const getAbbr = (str) => {
    if (str) {
        return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2);
    }
    else {
        return "";
    }
};
export const deserializeJSON = (json, component = 'unknown') => {
    try {
        json = json.split("&quot;").join("\"");
        return JSON.parse(json);
    }
    catch (e) {
        console.log(json, e);
        alert(`Error while trying to parse JSON in ${component} component`);
    }
};
export const findPath = (object, name, value, currentPath = []) => {
    let matchingPath;
    if (!object || typeof object !== 'object')
        return;
    if (object[name] === value)
        return currentPath;
    for (const key of Object.keys(object)) {
        if (key === name && object[key] === value) {
            matchingPath = currentPath;
        }
        else {
            matchingPath = findPath(object[key], name, value, [...currentPath, key]);
        }
        if (matchingPath)
            break;
    }
    return matchingPath;
};
export const setPath = (object, path, value) => path.reduce((acc, cur, index) => acc[cur] = path.length === ++index ? value : acc[cur] || {}, object);
