import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// let currentTime = new util.Time

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
// let myLabel = document.getElementById("myLabel");

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  let test = document.getElementById("test");
  
  // myLabel.innerText = `${hours}:${mins}:${secs}`;
}

// Update the clock every tick event
// clock.ontick = () => updateClock();

// Don't start with a blank screen
// updateClock();
