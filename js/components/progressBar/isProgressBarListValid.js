function isProgressBarListValid (list) {
    if (!Array.isArray(list)) {
        console.error("ERROR: the data supplied must be array-type.");
        return false;
    }
    return true;
}

export { isProgressBarListValid }
