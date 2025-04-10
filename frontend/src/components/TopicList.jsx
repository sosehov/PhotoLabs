import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem 
          key={topicData.id}
          topicData={topicData}
          onClick={onTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;
