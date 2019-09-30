import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Wrapper from "./components/wrapper";
import Scores from "./components/Scores"
import Characters from "./components/Character-Cards"
import Chars from "./characters.json"

class App extends Component  {
  state={
    Chars
  };

 imageClick = ()=>{
   
 }
  render(){
  return (
    <Wrapper>
      <Scores />
      <Header />
      {this.state.Chars.map(chars => (
      <Characters
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
