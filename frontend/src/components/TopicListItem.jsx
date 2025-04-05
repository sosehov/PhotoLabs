import "../styles/TopicListItem.scss";

const TopicListItem = ({topicData}) => {
  const {title} = topicData;

  return (
    <div className="topic-list__item">
      <span className="topic-list__item span">
        <h2>{title}</h2>
      </span>
    </div>
  );
};

export default TopicListItem;
