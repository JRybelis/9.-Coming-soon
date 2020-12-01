function isTextValid (text) {
    const maxTextLength = 1000;

    if (typeof text !== 'string') {
        return 'Data provided must be text-type.';
    }
    if (text === "") {
        return "Text field cannot be empty.";
    }
    if (text.length > maxTextLength) {
        return `Text supplied may not exceed ${maxTextLength} of symbols. You have exceeded the limit by ${text.length - maxTextLength} symbols.`;
    } 
    return true;
}

export { isTextValid }