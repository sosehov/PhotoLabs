import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({photoData, similarPhotos, closeModal}) => {
  const {user: { username, profile }, urls: { full: imageSource }, location } = photoData

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top-bar">
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
      </div>

      {/* Display the selected photo in larger size */}
      <div className="photo-details-modal__images">
        <img 
          src={imageSource} 
          alt={`Photo by ${username}`} 
          className="photo-details-modal__image"
        />
      </div>

      {/* Section for similar photos */}
      <div className="photo-details-modal__similar-photos">
        <h4 className="photo-details-modal__header">Similar Photos</h4>
        
        {/* Render the PhotoList component to show similar photos */}
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