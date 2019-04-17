import React, {Component} from 'react';
import axios from 'axios'
import './Inventory.css'

class Inventory extends Component {
    constructor(){
        super()
        this.state = {
            fullInventory: [],
            text: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/animalInventory').then( res => {
            this.setState({
                fullInventory: res.data.dataOfAnimals
            })
        })
    }

    handleSearch = (val) => {
        this.setState({
            text: val
        })
    }

    render(){
        let showFullInventory = this.state.fullInventory.filter((el) => {
            return el.name.includes(this.state.text)
        }).map((el, i) => {
            return (
                <div className="singleAnimal"> 
                    <h4> {el.name} </h4>
                    <div>
                        <img className="img_inventory" src={el.image} alt="animal" />
                    </div>
                    <button 
                        className="addBtn" onClick={() => this.props.addToList(el)} 
                        > 
                         ADD 
                    </button>
                </div>
            )
        })
        return (
            <div className="full_divForInventory"> 
                <div className="searchBar">
                    <input 
                        className="searchInput"
                        placeholder="search"
                        onChange={(e) => this.handleSearch(e.target.value)} /> 
                </div>
                {showFullInventory}
            </div>
        )
    }
}

export default Inventory