import React from 'react'
import {useState,useEffect} from "react";
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'

import SidePanel from '../components/SidePanel/SidePanel';
const MusicPlayer = () => {
    const [songs,setSongs] = useState([
        {
            "title": "Invincible [NCS Release]",
            "artist": "DEAF KEV",
            "album": "NCS",
            "track": "Invincible [NCS Release]",
            "year": "8",
            "img_src": "/assets/ncs-img1.jpg",
            "src": "/assets/invincible-ncs-release.mp3"
        },
        {
            "title": "Sky High [NCS Release]",
            "artist": "Elektronomia",
            "album": "NCS",
            "track": "Sky High [NCS Release]",
            "year": "9",
            "img_src": "/assets/ncs-img2.jpg",
            "src": "/assets/sky-high-ncs-release.mp3"
        },
        {
          "title": "Mortals (feat. Laura Brehm) [NCS Release]",
          "artist": "Warriyo",
          "album": "NCS",
          "track": "Mortals (feat. Laura Brehm) [NCS Release]",
          "year": "5",
          "img_src": "/assets/ncs-img4.jpg",
          "src": "/assets/mortals-feat-laura-brehm-ncs-release.mp3"
      },
      {
          "title": "Blank [NCS Release]",
          "artist": "Disfigure",
          "album": "NCS",
          "track": "Blank [NCS Release]",
          "year": "7",
          "img_src": "/assets/ncs-img5.jpg",
          "src": "/assets/blank-ncs-release.mp3"
      },
      {
        "title": "My Heart [NCS Release]",
        "artist": "Different Heaven & EH!DE",
        "album": "NCS",
        "track": "My Heart [NCS Release]",
        "year": "9",
        "img_src": "/assets/ncs-img6.jpg",
        "src": "/assets/my-heart-ncs-release.mp3"
    }

      ]);
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
      {/* <SidePanel /> */}
      
    </div>
  );
}

export default MusicPlayer
