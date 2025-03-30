// components.js

// Create the restaurant row for the table
export const restaurantRow = (restaurant) => {
    const { name, address, city } = restaurant;  // Destructure the restaurant object
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td>${name}</td>
      <td>${address}</td>
      <td>${city}</td>
    `;
    
    return tr;
  };
  
  // Create the modal content
  export const restaurantModal = (restaurant, menu) => {
    const { name, address, postalCode, city, phone } = restaurant;  // Destructure restaurant object
    const { courses } = menu;  // Destructure courses from menu
    
    let menuHtml = '';
    courses.forEach(course => {
      menuHtml += `
        <article class="course">
          <p><strong>${course.name}</strong>, Hinta: ${course.price || '?€'}, Allergeenit: ${course.diets}</p>
        </article>
      `;
    });
  
    return `
      <h1>${name}</h1>
      <p>${address}</p>
      <p>${postalCode}, ${city}</p>
      <p>${phone}</p>
      ${menuHtml}
    `;
  };
  