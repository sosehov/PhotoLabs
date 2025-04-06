import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, likedPhotos, toggleFavorite, openModal }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoData={photo}
          likedPhotos={likedPhotos}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default PhotoList;
