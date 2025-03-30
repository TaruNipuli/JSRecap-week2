// t1.js
import { fetchData } from './utils.js';
import { apiUrl } from './variables.js';
import { restaurantRow, restaurantModal } from './components.js';

const taulukko = document.querySelector('#target tbody');
const modal = document.querySelector('#modal');
let restaurants = [];

// Fetch all restaurants
const getRestaurants = async () => {
  try {
    restaurants = await fetchData(`${apiUrl}/restaurants`);
  } catch (error) {
    console.error(error);
  }
};

// Fetch a specific restaurant's daily menu
const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
};

// Sort restaurants alphabetically
const sortRestaurants = () => {
  restaurants.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
};

// Create the restaurant table rows
const createTable = () => {
  restaurants.forEach(restaurant => {
    const tr = restaurantRow(restaurant);  // Generate row using restaurantRow
    
    tr.addEventListener('click', async () => {
      try {
        document.querySelectorAll('.highlight').forEach(elem => elem.classList.remove('highlight'));
        tr.classList.add('highlight');

        const menu = await getDailyMenu(restaurant._id, 'fi');
        const modalHtml = restaurantModal(restaurant, menu);  // Generate modal content using restaurantModal
        
        modal.innerHTML = modalHtml;  // Set the modal content
        modal.showModal();
      } catch (error) {
        console.error(error);
      }
    });

    taulukko.append(tr);  // Append row to the table body
  });
};

// Main function to initialize the app
const main = async () => {
  try {
    await getRestaurants();
    sortRestaurants();
    createTable();
  } catch (error) {
    console.error(error);
  }
};

main();
