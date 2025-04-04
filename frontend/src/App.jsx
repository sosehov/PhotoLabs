import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      {/* sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem 
          key={photoData.id} //Add a key for each list item
          username={photoData.user.username}
          imageSource={photoData.urls.full}
          id={photoData.id}
          location={photoData.location}
          profile={photoData.user.profile}
        />
      ))*/}
      <PhotoList />
    </div>
  );
};

export default App;