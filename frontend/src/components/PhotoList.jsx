import React from 'react';
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id} //Add a key for each list item
          username={photoData.user.username}
          imageSource={photoData.urls.full}
          id={photoData.id}
          location={photoData.location}
          profile={photoData.user.profile}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
