import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Wrapper from "./components/wrapper";
import Scores from "./components/Scores"
import Characters from "./components/Character-Cards"
import Chars from "./characters.json"

class App extends Component  {
  state={
    Chars,
    clickedChars: [],
    score: 0,
    highScore:0,
    status:"Play the game by clicking an image!" +
    " Careful not to click the same image twice!"   
    
    };

 imageClick = id => {     
    if(this.state.clickedChars.includes(id)){
      this.setState({score:0, status:"You lost try again! "})
    }
    else{
      this.setState({score: this.state.score +1, clickedChars: [...this.state.clickedChars, id]})
      console.log(this.state.clickedChars)
    }
    
    
 };
 render(){
  
    
  return (
    <Wrapper>
      <Scores 
      score={this.state.score}
      highScore={this.state.highScore}
      status ={this.state.status}
      />
      <Header 
      status = {this.state.status}
      />
      
      {this.state.Chars.map(chars => (
      <Characters
      imageClick = {this.imageClick}
      id={chars.id}
      alt={chars.name}
      image ={chars.image}
      name ={chars.name}
      />
      ))};
    </Wrapper>
      
  );
  
}
}

export default App;
