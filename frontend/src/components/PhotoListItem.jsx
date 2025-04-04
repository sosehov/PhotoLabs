import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile} = props;

  return (
    <div className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
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