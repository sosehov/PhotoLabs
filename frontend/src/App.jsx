import React , { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="app">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photoData={selectedPhoto}
          similarPhotos={getSimilarPhotos(selectedPhoto)}
          closeModal={closeModal}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;