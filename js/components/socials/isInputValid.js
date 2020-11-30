/**
 * Validation of the data supplied to the renderSocial() function. 
 * @param {string} selector - provides a path to the place for the renderSocial() function generated code to be inserted in. 
 * @param {Array} data block consisting of objects that represent links to accounts on social websites.
 * @returns {boolean} - returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned. 
 */
function isInputValid (selector, data) {
    if (typeof selector !== "string") {
        console.error ("ERROR: the selector must be of a text string type.")
        return false;
    }
    if (selector === "") {
        console.error ("ERROR: the selector cannot be an empty string of text.")
        return false;
    }
    if (!Array.isArray(data)) {
        console.error ("ERROR: array type data is required to generate social icons.")
        return false;
    }
    if (data.length === 0) {
        console.error ("ERROR: social icons cannot be generated out of an empty array type data list.")
        return false;
    }
    return true;
}

export { isInputValid }