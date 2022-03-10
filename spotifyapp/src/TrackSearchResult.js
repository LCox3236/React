import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div className="track" style={{cursor: "pointer"}} onClick={handlePlay}>
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="trackTitle">
        <div>{track.title}</div>
        <div className="trackArtist">{track.artist}</div>
      </div>
    </div>
  )
}