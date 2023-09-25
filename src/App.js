import React, { useState, useEffect } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay';
import TypeSelector from './TypeSelector';
import Footer from './Footer';

const App = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      let url = `https://www.rijksmuseum.nl/api/en/collection?key=OAiYs4oK&format=json`;

      if (selectedType !== 'all') {
        url += `&type=${selectedType}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.artObjects && data.artObjects.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * data.artObjects.length
        );
        const randomArtObject = data.artObjects[randomIndex];
        setRandomImage(randomArtObject);
      }
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const handleFetchNewImage = () => {
    fetchRandomImage();
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="pageContent">
      <h1>Rijksmuseum Randomizer</h1>
      <TypeSelector selectedType={selectedType} handleTypeChange={handleTypeChange} />
      {randomImage && <ImageDisplay randomImage={randomImage} />}
      <button onClick={handleFetchNewImage}>Find Art</button>
      <Footer />
    </div>
  );
};

export default App;