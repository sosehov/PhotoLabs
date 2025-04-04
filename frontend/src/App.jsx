import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import React from 'react';

const App = () => {

  const sampleDataForPhotoList = [
    {
      id: 1,
      location: {
        city: "Montreal",
        country: "Canada",
      },
      urls: {
        full: "/Image-1-Full.jpeg",
        regular: "/Image-1-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },
    {
      id: 2,
      location: {
        city: "Toronto",
        country: "Canada",
      },
      urls: {
        full: "/Image-2-Full.jpeg",
        regular: "/Image-2-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },
    {
      id: 3,
      location: {
        city: "Ottawa",
        country: "Canada",
      },
      urls: {
        full: "/Image-3-Full.jpeg",
        regular: "/Image-3-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },
  ];

  return (
    <div className="app">
      {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem 
          key={photoData.id} //Add a key for each list item
          username={photoData.user.username}
          imageSource={photoData.urls.full}
          id={photoData.id}
          location={photoData.location}
          profile={photoData.user.profile}
        />
      ))}
    </div>
  );
};

export default App;