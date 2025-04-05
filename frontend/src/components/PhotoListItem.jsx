import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, likedPhotos, toggleFavorite }) => {
  const { user: { username, profile }, urls: { full: imageSource }, id, location } = photoData;

  // Checik if the current photo is liked
  const isLiked = likedPhotos.includes(id);

  const handleClick = () => {
    toggleFavorite(id);
  };

  return (
    <div className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
        <PhotoFavButton 
          isLiked={isLiked} 
          handleClick={handleClick} 
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