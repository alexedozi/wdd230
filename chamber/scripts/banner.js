const currDate = Date.now();
const dt = new Date(currDate);
const dayValue = dt.getDay();

if (dayValue <3 && dayValue >0){
    document.getElementById("banner").className = "visible";
}