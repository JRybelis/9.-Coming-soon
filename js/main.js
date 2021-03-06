import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from "./data/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";

import { renderAllProgressBars } from "./components/progressBar/renderAllProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

import { formValidator } from "./components/form-validator/formValidator.js";

import { Toast } from "./components/toast/Toast.js"

renderSocials( "footer > .row", socialsData );

renderClock (".clock");

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();
// toast.show('error', 'This contains an error!');
toast.show('Success', 'Congratulations!');

formValidator ('.hero .form');
formValidator ('main .form');