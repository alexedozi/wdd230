// Get the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = new Date();

if (!lastVisit) {
    // First visit
    localStorage.setItem('lastVisit', currentDate.toISOString());
    displayMessage("Welcome! Let us know if you have any questions.");
} else {
    const daysBetween = Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysBetween === 0) {
        displayMessage("Back so soon! Awesome!");
    } else {
        const message = daysBetween === 1 ? "day" : "days";
        displayMessage(`You last visited ${daysBetween} ${message} ago.`);
    }

    // Update last visit date
    localStorage.setItem('lastVisit', currentDate.toISOString());
}

function displayMessage(message) {
    // Display the message in the sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.textContent = message;
}
