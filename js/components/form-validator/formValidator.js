import { validation } from "./validationRules.js";

function formValidator ( selector ) {
    const formDOM = document.querySelector( selector ); /* bendrinis, po apačia specialūs nukreipimai, panaudojus formDOM ir jo (selector) priskyrus konkrečias reikšmes. */
    
    const submitBtnDOM = formDOM.querySelector("input[type='submit']");
    if (!submitBtnDOM) {
        console.error("ERROR: the submit form button was not located.");
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll("input:not([type='submit'])");
    const allTextareaDOMs = formDOM.querySelectorAll("textarea");

    const allElements = [...allInputDOMs, ...allTextareaDOMs];
    if (allElements.length === 0) {
        console.error ("ERROR: no input or textarea elements were located in the form.");
        return false;
    }
    

    submitBtnDOM.addEventListener("click", () => {
        let errorCount = 0;
        console.clear ();

        for (let input of allElements) {
            const validationRule = input.dataset.validation; /* all input in *dataset*, marked validation */ 
            const text = input.value; /* value = vartotojo suteikta medžiaga */

            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                console.log(error);
                errorCount++;
            }
        }
        if (errorCount === 0) {
            console.log ("Submitting info...");
        }
    })
}

export { formValidator }