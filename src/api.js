// Get a random art object of the selected type
const getRandomArtObject = async (selectedType) => {
    try {
      // Initialize url with key and query parameter that filters for art with images
      let url = `https://www.rijksmuseum.nl/api/en/collection?key=OAiYs4oK&imgonly=true`;

      // Append selected type query parameter if type is not all
      if (selectedType !== 'all') {
        url += `&type=${selectedType}`;
      }

      // Fetch the response
      const response = await fetch(url);

      // Check if the reponse is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Get the response as JSON data
      const data = await response.json();

      // Check if response contains artObjects
      if (data.artObjects && data.artObjects.length > 0) {
          // Randomly select an artObject from those of the selected type
          const randomIndex = Math.floor(
            Math.random() * data.artObjects.length
          );
          const randomArtObject = data.artObjects[randomIndex];
          return randomArtObject;
      }
    } catch (error) {
      console.error('Error getting random image:', error);
    }
  };

  export { getRandomArtObject }