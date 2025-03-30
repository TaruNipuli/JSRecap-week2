// t1.js
import { fetchData } from './utils.js';
import { apiUrl } from './variables.js';
import { restaurantRow, restaurantModal } from './components.js';

const taulukko = document.querySelector('#target tbody');
const modal = document.querySelector('#modal');
const filterSelect = document.querySelector('#filter');  // Filter dropdown
let restaurants = [];

// Fetch all restaurants
const getRestaurants = async () => {
  try {
    const data = await fetchData(`${apiUrl}/restaurants`);
    if (data) {
      restaurants = data;
      renderTable(restaurants);  // Render all restaurants initially
    } else {
      throw new Error('Failed to load restaurant data');
    }
  } catch (error) {
    console.error(error);
    alert('Error fetching restaurant data.');
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
const sortRestaurants = (restaurants) => {
  return restaurants.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
};

// Render restaurants in the table
const renderTable = (restaurantsToDisplay) => {
  taulukko.innerHTML = '';  // Clear the table before rendering new rows

  if (restaurantsToDisplay.length === 0) {
    taulukko.innerHTML = '<tr><td colspan="3">No restaurants found.</td></tr>';
    return;
  }

  restaurantsToDisplay.forEach((restaurant) => {
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

// Filter restaurants based on the selected company
const filterRestaurants = (filterValue) => {
  let filteredRestaurants = [];

  if (filterValue === 'sodexo') {
    filteredRestaurants = restaurants.filter(restaurant => restaurant.company.toLowerCase() === 'sodexo');
  } else if (filterValue === 'compass group') {
    filteredRestaurants = restaurants.filter(restaurant => restaurant.company.toLowerCase() === 'compass group');
  } else {
    filteredRestaurants = restaurants;  // No filter, show all restaurants
  }

  // Sort and render filtered restaurants
  renderTable(sortRestaurants(filteredRestaurants));
};

// Event listener for filter dropdown change
filterSelect.addEventListener('change', (e) => {
  filterRestaurants(e.target.value);
});

// Main function to initialize the app
const main = async () => {
  try {
    await getRestaurants();
  } catch (error) {
    console.error(error);
    alert('Error initializing the app');
  }
};

main();
