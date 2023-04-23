/* typography start */
const typedTextSpan = document.querySelector(".t_text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["under construction.", "lunching soon"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});





/* timer start */

// Set the date we're counting down to
let countDownDate = new Date("May 28, 2023 09:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
// Get todays date and time
let now = new Date().getTime();
// Find the distance between now an the count down date
let distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Display the result in an element with id="demo"
document.getElementById("countdown").innerHTML = days + " Days " + hours + " h " + minutes + " min " + seconds + " s ";
// If the count down is finished, --> Message
if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "RELEASED!";
  }
}, 1000);