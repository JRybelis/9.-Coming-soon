function isSingleProgressBarValid (progressBar) {
    if (typeof progressBar !== 'object') {
        console.error("ERROR: the data provided must be an object-type.");
        return false;
    }
    if (!progressBar.selector || typeof progressBar.selector !== 'string' || progressBar.selector === "") {
        console.error("ERROR: object selector must be provided and it must be a populated string-type.");
        return false;
    }
    if (!progressBar.title || typeof progressBar.title !== 'string' || progressBar.title === "") {
        console.error("ERROR: object title must be provided and it must be a populated string-type.");
        return false;
    }
    if (!progressBar.value || typeof progressBar.value !== 'number' || progressBar.value < 0 || progressBar.value > 100 || progressBar.value % 1 !== 0) {
        console.error("ERROR: object value must be provided and it must be a whole number in the range of 0 to 100.");
        return false;
    }
    return true;
}

export { isSingleProgressBarValid }