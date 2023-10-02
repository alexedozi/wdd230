//select element
const visitsDisplay = document.querySelector(".visits");
//define todays date
const currentDate = Date.now();
//set num of visits counter
//if first time: display Welcome message
let numVisits = Number(window.localStorage.getItem("numVisits-Is"))|| 0;
if (numVisits !==0){
    visitsDisplay.textContent = numVisits;
} else{
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`
}
numVisits++;
localStorage.setItem("numVisits-Is", numVisits);
//if visit less than a day display message2
 //If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
//else: message3 days betwwen visits
    //if message 3 = 1 change to day


//--------------CodePen Example---------------//

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;