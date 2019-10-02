import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Scores from "./components/Scores"
import Wrapper from "./components/wrapper"
import Characters from "./components/Character-Cards"
import Chars from "./characters.json"

class App extends Component {
  state = {
    Chars,
    clickedChars: [],
    score: 0,
    highScore: 0,
    status: ""
  };

  
 random = () => {this.state.Chars.sort(function (a, b) { return 0.5 - Math.random() })}

  imageClick = id => {
    if (this.state.clickedChars.includes(id)) {
      this.setState({ score: 0, status: "You lost try again! " })
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      };
    }

    else {
      this.setState({ score: this.state.score + 1, clickedChars: [...this.state.clickedChars, id] }) 
      this.random()     
      console.log(this.state.clickedChars);

    }


  };

  render() {

    return (
      <div>
        <Scores
          score={this.state.score}
          highScore={this.state.highScore}
          status={this.state.status}
        />
        <Header
          status={this.state.status}
        />
        <Wrapper>
          {this.state.Chars.map(chars => (
            <Characters
              imageClick={this.imageClick}
              id={chars.id}
              alt={chars.name}
              image={chars.image}
              name={chars.name}
            />
          ))};
      </Wrapper>

      </div>

    );

  }
}

export default App;
