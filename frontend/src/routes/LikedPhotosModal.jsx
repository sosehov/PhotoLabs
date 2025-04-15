import '../styles/PhotoDetailsModal.scss';
import '../styles/LikedPhotosModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const LikedPhotosModal = ({ likedPhotos, allPhotos, toggleFavorite, closeModal, openModal }) => {
  const likedPhotoObjects = allPhotos.filter(photo => likedPhotos.includes(photo.id));

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={closeModal}>
        <img src={closeSymbol} alt="close" className="photo-details-modal__close-icon" />
      </button>

      <div className="photo-details-modal__header">Your Liked Photos</div>
      {likedPhotoObjects.length === 0 ? (
        <p className="liked-photos-modal__empty-message">You haven’t liked any photos yet.</p>
      ) : (
        <PhotoList 
          photos={likedPhotoObjects}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default LikedPhotosModal;
