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
