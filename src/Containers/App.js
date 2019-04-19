import React, { Component } from 'react';
import Title from '../Components/Title';
import Input from '../Components/Input';
import Output from '../Components/Output';
import 'bulma';



class App extends Component {
  constructor() {
    super()
    this.state = { 
      dadJoke: '',
      previousJokes: []
    };
  }


   getJoke = async (e) => {
     
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }

    try {
      const response = await fetch('https://icanhazdadjoke.com/', options)
      const data = await response.json();
      this.setState({
        dadJoke: data.joke
      });
    } catch (err) {
        console.log(err, 'Oops! Something went wrong...somewhere');
      }
  
  }


  render() {
    return (
      <div className='container'>
        <Title />
        <Input previousJokes={this.previousJokes} getJoke={this.getJoke}/>
        <Output dadJoke={this.state.dadJoke}/>
      </div>
    );
  }
}

export default App;
