import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {title} = props;

  return (
    <div className="topic-list__item">
      <span className="topic-list__item span">
        <h2>{title}</h2>
      </span>
    </div>
  );
};

export default TopicListItem;
