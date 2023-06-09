// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Errorpage from './components/Errorpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicPlayer from './Pages/MusicPlayer';
import Chat from './Pages/ChatRoom/Chat';
import Album from './Pages/Album';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/music" element={<MusicPlayer />} />
          <Route path="/account" element={<Header/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/album" element={<Album />}></Route>
          <Route path="/" element={<Login />} />
          <Route path="C" element={<Errorpage/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
      
  );
}

export default App;
