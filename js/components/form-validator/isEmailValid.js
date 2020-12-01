function isEmailValid (email) {
    const maxEmailLength = 50;

    if (typeof email !== "string") {
        return "The e-mail address must be text type.";
    }
    if (email === "") {
        return "The e-mail field cannot be empty.";
    }
    if (email.length > maxEmailLength) {
        return `The e-mail cannot be longer than ${maxEmailLength} symbols. You have exceeded the limit by ${email.length - maxEmailLength} symbols.` 
    }
    return true;
}

export { isEmailValid }