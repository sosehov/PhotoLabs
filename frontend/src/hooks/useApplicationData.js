import { useState, useEffect } from 'react';
import topics from './mocks/topics';
import photos from './mocks/photos';

const useApplicationData = () => {

  // Initial state
  const [state, setState] = useState({
    likedPhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    photos: [],
    topics: []
  });

  // Action: Select a photo
  const onPhotoSelect = (photo) => {
    setState(prevState => ({
      ...prevState,
      selectedPhoto: photo,
      isModalOpen: true,
    }));
  }

  // Action: Toggle photo favorite status
  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => {
      const likedPhotos = prevState.likedPhotos.includes(photoId)
      ? prevState.likedPhotos.filter(id => id !== photoId)  // Remove if already liked
      : [...prevState.likedPhotos, photoId];  // Add to liked photos
    return { ...prevState, likedPhotos };
  });
};

  // Action: Close photo details modal
  const onClosePhotoDetailsModal = () => {
    setState((prevState)=> ({
      ...prevState,
      IsModalOpen: false,
      selectedPhoto: null,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};