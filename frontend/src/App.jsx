import React , { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  useEffect(() => {
    // placeholder for future
  }, []);

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

  return (
    <div className="app">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;