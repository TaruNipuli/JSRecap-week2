// utils.js
export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  