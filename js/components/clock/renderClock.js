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
    }
    const DOM = document.querySelector (selector);
    if (!DOM) {
        console.error ("ERROR: the place for clock HTML content generation was not found.");
        return false;
    }

// Current year (2020)
    const date = new Date();
    const currentYear = date.getFullYear();

// NYE = current year + 1 (2020 + 1 = 2021)
const newYear = currentYear + 1;

// Constructing the date in its full format: ${NYE}-01-01 00:00:00
const newYearDate = `${newYear}-01-01 00:00:00`;
const newYearObject = new Date (newYearDate);
const newYearMiliseconds = newYearObject.getTime();

// current time yyyy-mm-dd hh:mm:ss:ms
const currentTimeMiliseconds = date.getTime();

// The difference in time calculation
const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
let secondsLeft = timeLeft / 1000;

// take timeLeft and convert it to days, hours, minutes, and seconds, separated out.
const days = Math.floor(secondsLeft / 60 / 60 / 24);
secondsLeft -= days * 60 * 60 * 24;

const hours = Math.floor(secondsLeft / 60 / 60);
secondsLeft -= hours * 60 * 60;

const minutes = Math.floor(secondsLeft / 60);

const seconds = math.floor(secondsLeft - minutes * 60);

const HTML = `<div class = "time-box">
                    <div class = "time"> ${days} </div>
                    <span>Days</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${hours}</div>
                    <span>Hours</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class = "time-box">
                    <div class = "time"> ${seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    return true;
}

export  { renderClock } 