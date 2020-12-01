function isNameValid ( name ) {
    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return "Name must be text-type.";
    }
    if (name === "") {
        return "Name field cannot be empty.";
    }
    if (name.length > maxNameLength) {
        return `Name cannot exceed ${maxNameLength} symbols. You have exceeded the limit by ${name.length - maxNameLength} symbols.`; 
    }

    // Name must consist of appropriate symbols in the alphabet.
    const alphabet = "ąčęėįšųūqwertyuiopasdfghjklzxcvbnm";
    for (let letter of name) {
        if (!alphabet.includes(letter.toLowerCase())) {
            return `One of the symbols used (${letter}) is not allowed in the name field.`;
        }
    }

    // Determining whether the name string provided was all lowercase by converting it to lowercase and equating it to its original state.
    if (name.toLowerCase () === name ) {
        return "The name cannot be in all lowercase letters.";
    }

    // Determining whether the name string provided was all uuppercase by converting it to uppercase and equating it to its original state.
    if (name.toUpperCase () === name ) {
        return "The name cannot be in all uppercase letters.";
    }

    const realNameFormat = name [0].toUpperCase + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return "The first letter of the name must be capital, with the rest being lowercase.";
    }
    return true;
}

export { isNameValid }