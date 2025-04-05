import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, likedPhotos, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photoData={photoData}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
