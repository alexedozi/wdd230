const today = new Date();
const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday (1) to Wednesday (3)
  const banner = document.getElementById('meet-greet-banner');
  banner.style.display = 'block';

  const closeButton = document.getElementById('close-banner-button');
  closeButton.addEventListener('click', () => {
    banner.style.display = 'none';
  });
} else {
  const banner = document.getElementById('meet-greet-banner');
  banner.style.display = 'none';
}
