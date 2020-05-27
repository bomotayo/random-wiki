import React from 'react';


class SearchBar extends React.Component{

  state = {text: ''};

  // Method that takes in value entered in input field and sets the state
  onHandleChange = (event) => {
    this.setState({text: event.target.value})
  }

  // Method that contanins function passed from the App component that does the call to the API. Also prevents form from reseting after submitting
  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text);
  }

  render(){
    return (
      <div className="search-sec"> 
        <h3 className="random-sec"><a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Click here for a random article</a></h3>
        <form className="ui form form-sec" onSubmit={this.onSubmitForm} >
          <div className="field">
            <input className="prompt" onChange={this.onHandleChange} value={this.state.text} placeholder="Search..."/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;