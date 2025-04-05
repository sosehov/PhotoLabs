import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopicList from './components/TopicList';

const App = () => {
  return (
    <div className="app">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;