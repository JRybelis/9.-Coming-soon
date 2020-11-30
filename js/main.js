import {renderSocials} from "./components/socials/renderSocials.js";
import {socialsData} from "./data/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";

import {renderAllProgressBars } from "./components/progressBar/renderAllProgressBars.js";
import { progressBarData} from "./data/progressBarData.js";

renderSocials( "footer > .row", socialsData );

renderClock (".clock");

renderAllProgressBars(progressBarData);
