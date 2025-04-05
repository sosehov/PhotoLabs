import React from 'react';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <HomeRoute 
        photos={photos}
        topics={topics}
      />
    </div>
  );
};

export default App;