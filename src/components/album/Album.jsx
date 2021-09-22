

import React, { useState } from 'react'
import MusicList from '../music-list/music-list'


 const Album = (props) => {
    const {nameA,music} = props.album
 
    
const [visible, setVisible] = useState(false)

    return (<div>
        <h1>{nameA}</h1>
        <button onClick={() => setVisible(!visible)}> {visible ? `Hide list` : `Show list`} </button>
       { visible && <MusicList key={props.album.id} music={music}/> }
        </div>)
}

export default Album 