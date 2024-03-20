// Define the 6 people
const people = ['Hội', 'Huân', 'Hiệp', 'Giàu', 'Phúc', 'Hưng'];

// Define the background image list
const backgroundImages = ['https://i.pinimg.com/originals/60/63/da/6063da107454d50c1d7786cc2c2bac75.jpg', 'https://i.pinimg.com/originals/d1/a3/9b/d1a39b4f7aa37b96affcb9e6c4749866.jpg', 'https://i.pinimg.com/originals/aa/a3/16/aaa31665072b8b180dfba07058f5067f.jpg', 'https://www.dropbox.com/scl/fi/j6q19u6jucg9kg8pakfi7/b1-min.jpg?rlkey=zyagrjwvks04gd9008voxtrcb&dl=1', 'https://www.dropbox.com/scl/fi/ll2u3u7ty7deru7tbyaqa/b2-min.jpg?rlkey=a6hd7btgcil7l90vm2pgc21m9&dl=1'];

// Get the current date
const today = new Date();

// Find the person working this week
const weekNumber = getWeekNumber(today);
const personIndex = (weekNumber - 1) % people.length;
const currentWorker = people[personIndex];

// Calculate the start and end dates of the work week
const startDate = getStartOfWeek(today);
const endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);

// Update the HTML elements
document.getElementById('currentWorker').textContent = currentWorker;
document.getElementById('startDate').textContent = formatDate(startDate);
document.getElementById('endDate').textContent = formatDate(endDate);

// Set a random background image
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;

// Helper functions
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getStartOfWeek(date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

// Format date function
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Clock function
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);