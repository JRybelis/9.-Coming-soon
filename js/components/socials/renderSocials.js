import { isInputValid } from "./isInputValid.js";
import { isSocialItemValid } from "./isSocialItemValid.js";

/**
 * Generates social links out of supplied data into a selector designated place in the DOM.
 * @param {string} selector - designates a place for the insertion of the generated code.   
 * @param {Array} data -  data block, consisting of objects representing links to social websites. 
 * @returns {boolean} returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned.  
 */
function renderSocials(selector, data) {
// input validation
    if (!isInputValid (selector, data)) {
        return false;
    }

// logic
    const socialsDOM = document.querySelector(selector);
    if (!socialsDOM) {
        console.error ("ERROR: the place for content generation was not found.");
        return false;
    }

    let HTML = "";

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!isSocialItemValid(item)) {
            continue;
        }
        HTML += `<a href = "${item.link}" target = "_blank" class = "fa fa-${item.icon}" aria-hidden= "true"> </a>`;
        }

// post-logic validation
if (HTML === "") {
    console.error("ERROR: failed to generate social icons/links");
    return false;
}

// return 
    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials }