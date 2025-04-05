import React from 'react';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;