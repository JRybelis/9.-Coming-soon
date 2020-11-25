function isInputValidation(data) {
    if (!Array.isArray(data)) {
        console.error ("ERROR: social icons cannot be generated without array type data.");
        return false;
    }
    if (data.length === 0) {
        console.error ("ERROR: social icons cannot be generated from an empty array.");
        return false;
    }
    return true;
}

export { isInputValidation }