import React, {useState} from "react"



const OpeningTitle = (props) => {

       


return  <div>
        <img alt="Title" src={`https://upload.wikimedia.org/wikipedia/commons/e/e1/M%C3%A5neskin_logo.svg`} onClick={() => props.operation()}></img>
        
    </div>
}

export default OpeningTitle