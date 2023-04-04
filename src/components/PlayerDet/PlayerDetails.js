import React from "react";

function PlayerDetails(props) {
  return (
    <div className="music-player--details">
      <div className="details-img">
        <img
          className="details-img--image"
          src={require("../../assets/$orries_Cover (front)_e.jpg")}
          alt={props.song.title}
        />
      </div>
      <div class="range"></div>
      <div className="artist-info">
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
        <div class="line"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;