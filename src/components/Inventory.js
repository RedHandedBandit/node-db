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
            console.log(res)
            this.setState({
                fullInventory: res.data.allAnimals
            })
        })
    }

    render(){
        console.log('what is state', this.state.fullInventory)
        let showFullInventory = this.state.fullInventory.map((el, i, arr) => {
            return (
                <div key={i}> 
                    <h4> {el.name} </h4>
                    <div> 
                        <img className="img_inventory" src={el.image} alt="animal" /> 
                    </div>
                    <button> ADD </button>
                </div>
            )
        })
        console.log('showfull', showFullInventory)
        return (
            <div> 
                {showFullInventory}
            </div>
        )
    }
}

export default Inventory