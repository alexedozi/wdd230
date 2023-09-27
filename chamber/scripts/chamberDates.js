WebFont.load({
    google: {
        families: [
            'Gugi'
        ]
    }
})


// Set the year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear()

// Set the date when last updated
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp+" am"
}

function scrollDown(elem) {
    if (elem.scrollTop < 100) {
        document.querySelector('#scroll-down').className = "up"
    }
    else {
        document.querySelector('#scroll-down').className = ""
    }
}



    // Function to calculate the number of days between two dates
    function daysBetweenDates(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
        const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
        return diffDays;
    }

    // Check if this is the user's first visit
    if (!localStorage.getItem("lastVisit")) {
        document.querySelector(".sidebar").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(localStorage.getItem("lastVisit"));
        const currentDate = new Date();
        const daysSinceLastVisit = daysBetweenDates(currentDate, lastVisitDate);

        if (daysSinceLastVisit === 1) {
            document.querySelector(".sidebar").textContent = "Back so soon! Awesome!";
        } else {
            document.querySelector(".sidebar").textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", new Date().toString());
