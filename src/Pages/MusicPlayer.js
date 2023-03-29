import React from 'react'
import {useState,useEffect} from "react";
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import PlayerControls from '../components/PlayerCon/PlayerControls'
import PlayerDetails from '../components/PlayerDet/PlayerDetails'
const MusicPlayer = () => {
    const [songs,setSongs] = useState([
        {
            "title": "$orries",
            "artist": "Peachy!",
            "album": " Shiloh",
            "track": "$orries",
            "year": "1",
            "img_src": "../../assets/$orries_Cover (front)_e.jpg",
            "src": "../../assets/$orries.mp3"
        },
        {
            "title": "5:32pm",
            "artist": "The Deli",
            "album": "Vibes 2",
            "track": "12",
            "year": "",
            "img_src": "../../assets/5 32pm_Cover (front)_e.jpg",
            "src": "../../assets/5 32pm.mp3"
        }]);
        const [currentSongIndex,setCurrentSongIndex] = useState(0);
        const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


       useEffect(()=>{
       setNextSongIndex(()=>{
       if (currentSongIndex + 1 >songs.length - 1 ){
         return 0;
       } else{
         return currentSongIndex + 1;
        }
    });
},[currentSongIndex])
  return (
    <div>
      <Header />
      <Player currentSongIndex={currentSongIndex} 
      setCurrentSongIndex={setCurrentSongIndex} 
      nextSongIndex={nextSongIndex} 
      songs={songs} />
      <PlayerControls />
      <PlayerDetails />
    </div>
  );
}

export default MusicPlayer
