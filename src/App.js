import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory'
import YourList from './components/YourList'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showYourList: false
    }
  }

  yourList = (location) => {
    if(location === 'Your List'){
      this.setState({showYourList: true})
    } else {
      this.setState({showYourList: false})
    }
  }
  render() {
    const {showYourList} = this.state
    return (
      <div className="App">
        <NavBar yourList={this.yourList} />
        {showYourList ? 
          <YourList /> : 
            <Inventory /> 
            }
        
        
      </div>
    );
  }
}

export default App;
