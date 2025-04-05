import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, likedPhotos, toggleFavorite} = props;
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList 
        photos={photos}
        likedPhotos={likedPhotos}
        toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
