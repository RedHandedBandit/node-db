import React, {Component} from 'react';
import './YourList.css'

class YourList extends Component {
    constructor(props){
        super(props)
        this.state = {
            editInfo: false
        }
    }

    handleEditInfoClick = () => {
        console.log('i clicked the button', this.state.editInfo)
        this.setState({editInfo: !this.state.editInfo})
    }

    render(){
        let yourList = this.props.ownList.map((el, i) => {
            return (
                <div className="fullCard" key={i}> 
                    <header className="header_yourList"> 
                        <img className="img_yourList" src={el.image} alt="animal" />
                        <div className="name_status"> 
                            <h2> {el.name} </h2>
                            <span> Status: 
                                <mark className="status"> {el.status} </mark> 
                            </span>
                        </div>
                    </header>
                    <div className="bulletsPoints_yourList"> 
                        <span className="bp_span"> Height: {el.height} </span>
                        <span className="bp_span"> Weight: {el.weight} </span>
                        <span className="bp_span"> Length: {el.length} </span>
                        <span className="bp_span"> Population: {el.population} </span>
                        <span className="bp_span"> Habitat: {el.habitat} </span>
                        <span className="bp_span"> Diet: {el.food} </span>
                    </div>
                    <div className="info_div" >
                        Things to Know about the {el.name}
                        <p className="info_pContainer"> 
                            {el.info}
                        </p>
                    </div>
                    <footer className="all_btns" > 
                        {!this.state.editInfo ?
                            <button onClick={() => this.handleEditInfoClick()}> EDIT </button> :
                            <div> 
                                <textarea />
                                <button> SUBMIT </button>
                            </div>
                        }
                        <button> PLAY </button>
                            <button> 
                                    DELETE 
                            </button> 
                    </footer>
                </div>
            )
        })
        return (
            <div className="divReturning_yourList"> 
                {yourList}
            </div>
        )
    }
}

export default YourList