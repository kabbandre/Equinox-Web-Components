var getAbbr = function (str) {
    if (str) {
        return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2);
    }
    else {
        return "";
    }
};
var deserializeJSON = function (json, component) {
    if (component === void 0) { component = 'unknown'; }
    try {
        json = json.split("&quot;").join("\"");
        return JSON.parse(json);
    }
    catch (e) {
        alert("Error while trying to parse JSON in " + component + " component");
    }
};
export { deserializeJSON as d, getAbbr as g };
