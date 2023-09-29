import React, { useState, useCallback } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay';
import TypeSelector from './TypeSelector';
import Footer from './Footer';

const App = () => {
  // Initialize constants for artObject and type
  const [artObject, setArtObject] = useState(null);
  const [selectedType, setSelectedType] = useState('all');

  // Fetch a random art object of the selected type
  const fetchRandomArtObject = useCallback(async (selectedType) => {
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
          setArtObject(randomArtObject);
      }
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  }, []);

  // Handling function to allow for calling fetch when button is clicked
  const handleFetchNewImage = () => {
    fetchRandomArtObject(selectedType);
  };

  // TODO: Is this necessary?
  // Handling function to allow for calling setSelectedType when type is selected
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="pageContent">
      <h1>Rijksmuseum Randomizer</h1>
      <TypeSelector selectedType={selectedType} handleTypeChange={handleTypeChange} />
      <ImageDisplay artObject={artObject} />
      <button onClick={handleFetchNewImage}>Find Art</button>
      <Footer />
    </div>
  );
};

export default App;