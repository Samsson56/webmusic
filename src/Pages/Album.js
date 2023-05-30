import React from 'react'
import { musicList } from '../data/music'

const Album = () => {
  return (
    <div>
      {musicList.map((item, index)=>{
        return (
            <>
            <h6>Title: {item.title}</h6>
            <p>Artist: {item.artist}</p>
            <p>Album:  {item.album}</p>
            <p>Track:  {item.track}</p>
            {/* <p>Year:   {item.year}</p>
            <img>Image: {item.img_src}</img>
            <audio>Song:  {item.src}</audio> */}
            </>
        );
      })}
    </div>
  )
}

export default Album
