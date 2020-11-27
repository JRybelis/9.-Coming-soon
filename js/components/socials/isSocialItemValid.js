/**
 * Validation of the data supplied to the renderSocial() function.  
 * @param {object} itemObject - describes a social media account link, consisting of its icon and a `href` link. 
 @returns {Boolean} returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned. 
 */ 
function isSocialItemValid (itemObject) {
    if (typeof itemObject !== "object") {
        console.warn ("ERROR: the social element must be an object.");
        return false;
    }
    if (typeof itemObject.link !== "string" || itemObject.link === "") {
        console.warn ("ERROR: social icons link must be string type that is also not empty.");
        return false;
    }
    return true;
}

export { isSocialItemValid }