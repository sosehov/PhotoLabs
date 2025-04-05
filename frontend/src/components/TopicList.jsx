import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: 1,
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: 2,
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: 3,
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topicData) => (
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
