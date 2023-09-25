import React from 'react';

export default function ImageDisplay ({ randomImage }) {
    return (
      <div className="imageContent">
        <h2><i>{randomImage.title}</i></h2>
        <img
          src={randomImage.webImage.url}
          alt={randomImage.title}
        />
        <h2>By {randomImage.principalOrFirstMaker ? randomImage.principalOrFirstMaker: 'anonymous'}</h2>
      </div>
    );
  };
