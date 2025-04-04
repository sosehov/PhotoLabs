import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { isLiked, handleClick } = props;

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <svg 
        className={`photo-list__fav-icon-svg ${isLiked ? 'liked' : ''}`} 
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.5 2-4.5 4.5-4.5S11 6 12 6s3.5-1.5 3.5-3.5S16 2.5 16 2.5s3.5 0 3.5 4.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default PhotoFavButton;
