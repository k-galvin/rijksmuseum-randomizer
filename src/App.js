import React, { useState, useEffect } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay';
import TypeSelector from './TypeSelector';
import Footer from './Footer';
import { getRandomArtObject } from './api';

const App = () => {
  // Initialize state and state setter constants
  const [artObject, setArtObject] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Flags if it is the initial load of the page

  useEffect(() => {
    async function fetchData() {
      const artObject = await getRandomArtObject(selectedType);
      setArtObject(artObject);
      setLoading(false); // Disable loading status
    }

    setLoading(true); // Enable loading status

    // Only call fetch data if it is not the initial load of the page
    if (initialLoad) {
      setInitialLoad(false); // Disable initial load flag
    } else {
      fetchData();
    }
  }, [selectedType, initialLoad]);

  return (
    <div className="pageContent">
      <h1>Rijksmuseum Randomizer</h1>
      <TypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />
      {loading && <p>Loading...</p>}
      <ImageDisplay artObject={artObject} />
      <Footer />
    </div>
  );
};

export default App;