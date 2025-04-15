import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, likedPhotos, toggleFavorite, openModal, onTopicSelect, onFavClick } = props;
  
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        likedPhotos={likedPhotos}
        onTopicSelect={onTopicSelect}
        onFavClick={onFavClick}
      />
      <PhotoList 
        photos={photos}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
