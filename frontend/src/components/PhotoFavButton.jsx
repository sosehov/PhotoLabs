import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {
  const { isLiked, handleClick } = props;

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
