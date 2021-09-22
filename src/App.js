
import React, {Component} from 'react'

import data from './data.js'
import Album from './components/album/Album'
import OpeningTitle from './components/openingTitle/OpeningTitle.jsx';

import './App.css';

class App extends Component {
 constructor(){
   super()

   this.state={
     showState: false
   }
   this.operation = this.operation.bind(this)
 }


operation(){

  this.setState({showState: !this.state.showState})
}

render(){
 
  return (


    <div className="App">



{!this.state.showState && <OpeningTitle operation= {this.operation}/>}


<div>
{this.state.showState && data.map(album => (<Album key={album.id} album={album}
  />))}
</div>
</div>
  );  
}
}




export default App;
