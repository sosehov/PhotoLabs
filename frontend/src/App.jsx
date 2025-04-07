import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state: { photos, topics, likedPhotos, selectedPhoto, isModalOpen },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getSimilarPhotos,
  } = useApplicationData();

  return (
    <div className="app">
      <HomeRoute 
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleFavorite={updateToFavPhotoIds}
        openModal={onPhotoSelect}
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
    </div>
  );
};

export default App;