import React from 'react';
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photoData={photoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
