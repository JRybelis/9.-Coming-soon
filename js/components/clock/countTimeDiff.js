function countTimeDiff() {
    
    // Current year (2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    // New Year's day = current year + 1 (2020 + 1 = 2021)
    const newYear = currentYear + 1;

    // Full date construct: ${newYear}-01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();

    // The format for the current date & time: yyyy-mm-dd hh:mm:ss
    const currentTimeMiliseconds = date.getTime();
    
    // The difference in time calculated:
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;

    // The remaining days, hours, minutes and seconds are counted out of the resulting difference.
    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 * 60 * 24;

    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;
    
    const minutes = Math.floor(secondsLeft / 60);
    
    const seconds = Math.floor(secondsLeft - minutes * 60);

    return {
        days: days < 10 ? '0' + days : days, /* if days value is lower than 10, 0 + days value is displayed, else days value is displayed */
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
    }
}

export { countTimeDiff }