import React, { Component } from 'react';


class Input extends Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.getJoke}>
          <input className='button'type='submit' value='Can I haz?'></input>
        </form>
      </div>
    );
  }
}

export default Input;