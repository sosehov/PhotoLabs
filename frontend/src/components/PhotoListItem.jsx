import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile, name } = props;

  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list-image">
        <img src={imageSource} className="photo-list__image" />
      </div>
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <h3>{username}</h3>
          <h2>{name}</h2>
          <p>{location.city}, {location.country}</p>
        </div>
        <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
      </div>
    </div>
  );
};

export default PhotoListItem;