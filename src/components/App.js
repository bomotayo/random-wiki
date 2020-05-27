import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ResultList from './ResultList';


class App extends React.Component{
  state = {list: []};


  //Axios fetching API, Passed to searchBar component. Also the List state is set to contain the array of search results from JSON API. 
  onTextSubmit = async (text)  => {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${text}&format=json`);

      console.log(response.data);

      this.setState({
        list: response.data.query.search
      })
  }

    //List state(array) is passed to the ResultList Component
  render(){
    return (
      <div className="ui container app-sec">

        <SearchBar onFormSubmit={this.onTextSubmit}/>
        <br/>
        <ResultList list={this.state.list}/>
      </div>
    );
  }
};

export default App;