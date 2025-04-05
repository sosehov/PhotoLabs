import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from '../mocks/topics';

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem 
          key={topicData.id}
          id={topicData.id}
          slug={topicData.slug}
          title={topicData.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
