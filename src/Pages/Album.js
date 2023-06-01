import React from 'react'
import { musicList } from '../data/music';
import Header from '../components/Header/Header';
import '../Styles/Album.css';

const Album = () => {
  return (
    <div>
      <Header />
      {musicList.map((item, index)=>{
        return (
            <div className='data'>
            <h3>Title: {item.title}</h3>
            <p>Artist: {item.artist}</p>
            <p>Album:  {item.album}</p>
            <p>Track:  {item.track}</p>
            <p>Year:   {item.year}</p>
            {/* <img>Image: {item.img_src}</img>
            <audio>Song:  {item.src}</audio> */}
            </div>
        );
      })}
    </div>
  )
}

export default Album
