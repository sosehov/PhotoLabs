import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
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
        onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" className="photo-details-modal__close-icon" />
      </button>

      {/* Display the selected photo in larger size */}
      <div className="photo-details-modal__top-bar">
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

      {/* Photographer's profile and details below the image */}
      <div className="photo-details-modal__photographer-details">
          <img 
            src={profile} 
            alt={`Profile of ${username}`} 
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">{username}</div>
            <div className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </div>
          </div>
      </div>

      {/* Similar Photos Heading */}
      <div className="photo-details-modal__header">Similar Photos</div>

      {/* Section for similar photos */}
      <div className="photo-details-modal__images">
        <PhotoList 
          photos={similarPhotos} 
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;