import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ topics, likedPhotos, onTopicSelect, onFavClick }) => {
  // Check if there are any liked photos
  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect}/>
      <div onClick={onFavClick} style={{ cursor: 'pointer' }}>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </div>
    </div>
  );
};

export default TopNavigationBar;
