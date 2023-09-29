import React from 'react';
import fillerPhoto from './filler-photo.jpg';

export default function ImageDisplay ({ artObject }) {
    return !artObject ? (
      <img 
          className="fillerImage"
          src={fillerPhoto}
          alt="question mark"
        />
    ) : (
      <div className="imageContent">
        <h2><i>{artObject.title}</i></h2>
        <img
          src={artObject.webImage.url}
          alt={artObject.title}
        />
        <h2>By {artObject.principalOrFirstMaker ? artObject.principalOrFirstMaker: 'anonymous'}</h2>
      </div>
    );
  };
