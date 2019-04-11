import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory'
import YourList from './components/YourList'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showYourList: false,
      ownList: []
    }
  }

  yourList = (location) => {
    if(location === 'Your List'){
      this.setState({showYourList: true})
    } else {
      this.setState({showYourList: false})
    }
  }

  addToList = (item) => {
    console.log(this.state.ownList)
    this.setState({ownList: [...this.state.ownList, item]})
  }

  render() {
    const {showYourList, ownList} = this.state
    return (
      <div className="App">
        <NavBar yourList={this.yourList} />
        {showYourList ? 
          <YourList ownList={ownList} /> : 
            <Inventory addToList={this.addToList} /> 
            }
        
        
      </div>
    );
  }
}

export default App;
