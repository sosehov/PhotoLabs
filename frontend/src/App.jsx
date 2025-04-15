import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import LikedPhotosModal from './routes/LikedPhotosModal';

const App = () => {
  const {
    state: { photos, topics, likedPhotos, selectedPhoto, isModalOpen, likedPhotosModalOpen },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getSimilarPhotos,
    fetchPhotosByTopic,
    toggleLikedPhotosModal,
  } = useApplicationData();

  return (
    <div className="app">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleFavorite={updateToFavPhotoIds}
        openModal={onPhotoSelect}
        onTopicSelect={fetchPhotosByTopic}
        onFavClick={toggleLikedPhotosModal}
      />
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photoData={selectedPhoto}
          similarPhotos={getSimilarPhotos(selectedPhoto)}
          closeModal={onClosePhotoDetailsModal}
          likedPhotos={likedPhotos}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
      {likedPhotosModalOpen && (
      <LikedPhotosModal
        likedPhotos={likedPhotos}
        allPhotos={photos}
        toggleFavorite={updateToFavPhotoIds}
        closeModal={toggleLikedPhotosModal}
        openModal={onPhotoSelect}
      />
      )}
    </div>
  );
};

export default App;