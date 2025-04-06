import React , { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    setLikedPhotos((prevLikedPhotos) => {
      if (prevLikedPhotos.includes(photoId)) {
        // Remove from liked photos if it's already in the list
        return prevLikedPhotos.filter((id) => id !== photoId);
      } else {
        // Add to liked photos if it's not in the list
        return [...prevLikedPhotos, photoId];
      }
    });
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

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
          photo={selectedPhoto}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;