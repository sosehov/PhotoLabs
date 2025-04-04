import react, { useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile} = props;
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
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