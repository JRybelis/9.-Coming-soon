import { isProgressBarListValid } from "./isProgressBarListValid.js";
import { isSingleProgressBarValid } from "./isSingleProgressBarValid.js";
import { renderProgressBar } from "./renderProgressBar.js";

/**
 * 
 * @param {Object[]} data
 * @param {string} data[].selector - CSS-like selector which points to the place where content is supposed to be generated.  
 * @param {string} data[].title - the title of the progress bar.
 * @param {number} data[].value - the state of the progress bar, expressed as percentage value.
 * @returns {boolean} -  returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned. 
 */
function renderAllProgressBars (data) {
    if (!isProgressBarListValid (data)) {
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isSingleProgressBarValid(bar)) {
            continue;
        }
        renderProgressBar(bar.selector, bar.title, bar.value);
    }
    return true;
}

export { renderAllProgressBars }