import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import FavBadge from '../components/FavBadge';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({photoData, similarPhotos, closeModal,likedPhotos,toggleFavorite}) => {
  const {id, user: { username, profile }, urls: { full: imageSource }, location } = photoData

  // Check if current photo is liked
  const isLiked = likedPhotos.includes(id);

  // Handle the heart icon click to toggle the like
  const handleLikeClick = () => {
    toggleFavorite(id);
  }

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" className="photo-details-modal__close-icon" />
      </button>

      {/* Display the selected photo in larger size */}
      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__image-container">
          <img 
            src={imageSource} 
            alt={`Photo by ${username}`} 
            className="photo-details-modal__image"
          />
        <PhotoFavButton
          isLiked={isLiked}
          handleClick={handleLikeClick}
        />
        </div>
      </div>

      {/* Photographer's profile and details below the image */}
      <div className="photo-details-modal__photographer-section">
        <div className="photo-details-modal__photographer-details">
          <img 
            src={profile} 
            alt={`Profile of ${username}`} 
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <h3>{username}</h3>
            <div className="photo-details-modal__photographer-location">
              <p>{location.city}, {location.country}</p>
            </div>
          </div>
        </div>

        {/* Similar Photos Heading */}
        <h3 className="photo-details-modal__header-similar-photos">Similar Photos</h3>
      </div>

      {/* Section for similar photos */}
      <div className="photo-details-modal__images">
        <PhotoList 
          photos={similarPhotos} 
          likedPhotos={[]} // Passing empty array for likedPhotos; could be extended later
          toggleFavorite={() => {}} // Placeholder, modify to handle favorite toggling if needed
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;