import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ topics, likedPhotos }) => {
  // Check if there are any liked photos
  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
};

export default TopNavigationBar;
