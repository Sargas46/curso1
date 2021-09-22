import React from 'react'

const MusicList = (props) => {
  
    const music = props.music 
const musicList = music.map(music => {return <li key={music.toString()}>{music}</li>})

return musicList
}

export default MusicList