import { countTimeDiff } from "./countTimeDiff.js";

// Target date is the New Year's Eve
// 2021-01-01 00:00:00

/**
 * Generates a static clock that shows how much time is left until the next New Year's Eve.
 * @param {string} selector - points to the location for the generated clock HTML content.
 * @returns { boolean } Returns `false` in the event of a logical fault in the supplied data. Otherwise, the value `true` is returned.
 */
function renderClock (selector) {
    if (typeof selector !== 'string' || selector === "") {
        console.error ("ERROR: the selector must be of string text type and cannot be empty.")
        return false;
    }
    const DOM = document.querySelector (selector);
    if (!DOM) {
        console.error ("ERROR: the place for clock HTML content generation was not found.");
        return false;
    }

    const time = countTimeDiff();

const HTML = `<div class = "time-box">
                    <div class = "time"> ${time.days} </div>
                    <span>Days</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time'); /* contains all the div class = .time elements */

    // launching the clock mechanics
    let timePassed = 0;

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
        }, 1000);

    return true;
}

export  { renderClock } 