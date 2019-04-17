import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory'
import YourList from './components/YourList/YourList'
import NavBar from './components/NavBar'
import axios from 'axios'

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

  addToList = (item, id) => {
    axios.post(`/api/myList/${item.id}`)
    .then(res => {
      this.setState({ownList: res.data})
    })
    .catch(error => console.log('this wrong', error))
    // console.log(this.state.ownList)
  }



  // < --------------- UPDATING DATA BELOW THIS LINE --------------------- >
  submitNewAnimalInfo = (id, info) => {
    // console.log(id)
    // console.log('info', info)
    // console.log(this.state.ownList)
    let newInfo = {
      newInfo: info
    } 
    axios.put(`/api/info/${id}`, newInfo).then( res => {
      // console.log('ownList of anu;dfj', res.data)
        this.setState({ownList: res.data})
    })
    }

    // < ---------------- DELETING DATA BELOW THIS LINE ------------------ > 
    deleteInfo = (data) => {
      console.log('deleteInfo', data)
      this.setState({ownList: data})
    }
    deleteAnimal = (id) => {
      console.log('deleteAnimal id', id)
      let copyOfList = this.state.ownList.slice()
      copyOfList.splice()
      axios.delete(`/api/animal/${id}`).then( res =>
        this.deleteInfo(res.data)
        )
        .catch(error => console.log('error found ma doode', error))
    }

  render() {
    // console.log(this.state.ownList)
    const {showYourList, ownList} = this.state
    return (
      <div className="App">
        <NavBar yourList={this.yourList} />
        {showYourList ? 
          <YourList 
            submitNewAnimalInfo={this.submitNewAnimalInfo} 
            ownList={ownList} 
            deleteAnimal={this.deleteAnimal}
            /> : 
          <Inventory addToList={this.addToList} /> 
            }
        
        
      </div>
    );
  }
}

export default App;
