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
        alert(`Error while trying to parse JSON in ${component} component`);
    }
};
