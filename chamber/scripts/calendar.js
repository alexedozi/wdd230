// script.js
function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = "<table>";
    calendarHTML += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
    let dayOfWeek = new Date(year, month, 1).getDay();

    for (let i = 0; i < dayOfWeek; i++) {
        calendarHTML += "<td></td>";
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (dayOfWeek === 0) {
            calendarHTML += "<tr>";
        }

        calendarHTML += `<td>${day}</td>`;
        dayOfWeek++;

        if (dayOfWeek === 7) {
            calendarHTML += "</tr>";
            dayOfWeek = 0;
        }
    }

    calendarHTML += "</table>";
    calendarContainer.innerHTML = calendarHTML;
}

// Call the function to generate the calendar when the page loads
window.addEventListener("load", generateCalendar);
