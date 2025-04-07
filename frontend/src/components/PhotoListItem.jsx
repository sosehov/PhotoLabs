import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, likedPhotos, toggleFavorite, openModal }) => {
  const { user: { username, profile }, urls: { full: imageSource }, id, location } = photoData;

  // Checik if the current photo is liked
  const isLiked = likedPhotos.includes(id);

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevent modal from opening when clicking the heart
    toggleFavorite(id);
  };

  const handleOpenModal = () => {
    openModal(photoData); // Open the modal with the clicked photo's data
  }

  return (
    <div className="photo-list__item" onClick={handleOpenModal}>
      <img src={imageSource} className="photo-list__image" alt={`Photo by ${username}`}/>
      <div className="photo-list__user-details">
        <img 
          src={profile}
          alt={`Profile of ${username}`}
          className="photo-list__user-profile" 
        />
        <PhotoFavButton 
          isLiked={isLiked} 
          handleClick={handleLikeClick} 
        />
        <div className="photo-list__user-info">
          <h3>{username}</h3>
          <div className="photo-list__user-location">
            <h2>{location.city}, {location.country}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;