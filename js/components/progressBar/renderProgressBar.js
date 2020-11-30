import { isSingleProgressBarValid } from "./isSingleProgressBarValid.js";

/**
 * Generates the progress bar component.
 * @param {string} selector - CSS-like selector which points to the place where content is supposed to be generated.  
 * @param {string} title - the title of the progress bar. 
 * @param {number} value - the state of the progress bar, expressed as percentage value.
 * @returns {boolean} -  returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned. 
 */
function renderProgressBar (selector, title, value) {
    if (!isSingleProgressBarValid({selector, title, value})) {
        return false;
    }

    const HTML = `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${title}</div>
                        <div class="value">${value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="bar" style="width: ${value}%;">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>`;

    const DOM = document.querySelector(selector);
    
    if (!DOM) {
        console.error("ERROR: the designated place for content cannot be found.");
        return false;
    }

    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }