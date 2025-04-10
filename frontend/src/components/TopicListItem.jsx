import "../styles/TopicListItem.scss";

const TopicListItem = ({topicData, onClick}) => {
  const {title, id} = topicData;

  const handleClick = () => {
    onClick(id);
  }

  return (
    <div className="topic-list__item" onClick={handleClick} role="button" tabIndex={0}>
      <span className="topic-list__item span">
        <h2>{title}</h2>
      </span>
    </div>
  );
};

export default TopicListItem;
