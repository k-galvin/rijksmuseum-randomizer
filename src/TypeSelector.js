import React from 'react';

export default function TypeSelector ({ selectedType, handleTypeChange }) {
  return (
    <div className="typeSelector">
      <label htmlFor="type">Select Artwork Type:</label>
      <select id="type" onChange={handleTypeChange} value={selectedType}>
        <option value="all">All Types</option>
        <option value="painting">Painting</option>
        <option value="sculpture">Sculpture</option>
        <option value="photograph">Photo</option>
        <option value="drawing">Drawing</option>
        <option value="furniture">Furniture</option>
        <option value="jewellery">Jewelry</option>
      </select>
    </div>
  );
};

