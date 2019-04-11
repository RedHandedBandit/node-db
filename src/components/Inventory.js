import React, {Component} from 'react';
import axios from 'axios'
import './Inventory.css'

class Inventory extends Component {
    constructor(){
        super()
        this.state = {
            fullInventory: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/animalInventory').then( res => {
            this.setState({
                fullInventory: res.data.allAnimals
            })
        })
    }

    render(){
        let showFullInventory = this.state.fullInventory.map((el, i, arr) => {
            return (
                <div className="singleAnimal" key={i}> 
                    <h4> {el.name} </h4>
                    <div> 
                        <img className="img_inventory" src={el.image} alt="animal" /> 
                    </div>
                    <button onClick={() => this.props.addToList(el)} > ADD </button>
                </div>
            )
        })
        return (
            <div className="full_divForInventory"> 
                {showFullInventory}
            </div>
        )
    }
}

export default Inventory