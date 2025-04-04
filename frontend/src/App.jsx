import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import PhotoList from './components/PhotoList';


const App = () => {
  const sampleDataForPhotoListItem = {
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
  };

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
      <PhotoListItem 
        username={sampleDataForPhotoListItem.user.username}
        imageSource={sampleDataForPhotoListItem.urls.full}
        id={sampleDataForPhotoListItem.id}
        location={sampleDataForPhotoListItem.location}
        profile={sampleDataForPhotoListItem.user.profile}
      />
      <PhotoList />

    </div>
  );
};

export default App;