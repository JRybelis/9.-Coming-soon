import { isEmailValid } from "./isEmailValid.js";
import { isNameValid } from "./isNameValid.js";
import { isTextValid } from "./isTextValid.js";

// validation object keywords match the terms assigned to the data-validation sections in the form elements, in index.html
const validation = {
    email: isEmailValid,
    text: isTextValid,
    name: isNameValid
}

export { validation }