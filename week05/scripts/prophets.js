const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.firstName} ${prophet.lastName}`;
    portrait.setAttribute('src', prophet.imageUrl);
    portrait.setAttribute('alt', `${prophet.firstName} ${prophet.lastName}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '300');

    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};

document.addEventListener('DOMContentLoaded', getProphetData);
