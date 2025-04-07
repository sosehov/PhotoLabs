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

  // Function to open the modal with a selected photo
  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

    // Function to get similar photos on the modal
  const getSimilarPhotos = (photoData) => {
    // in the future implement the logic to find similar photos
    return photos.filter((photo) => 
      photo.location.city === photoData.location.city && photo.id !== photoData.id);
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