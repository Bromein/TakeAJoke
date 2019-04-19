import React, { Component } from 'react';


class Output extends Component {
  render(props){
    return(
      <div>
         <p className="section">{this.props.dadJoke}</p>
      </div>
    );
  }
}

export default Output;