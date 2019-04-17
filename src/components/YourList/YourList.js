import React, {Component} from 'react';
import './YourList.css'
import Video from './Video/Video'
import SingleCard from './SingleCard/SingleCard'

class YourList extends Component {
    constructor(props){
        super(props)
        this.state = {
            editInfo: false,
            updateInfo: '',
            video: false
        }
    }

    handleEditInfoClick = () => {
        // console.log('i clicked the button', this.state.editInfo)
        this.setState({editInfo: !this.state.editInfo})
    }

    updateAnimalClick = (val) => {
        this.setState({updateInfo: val})
        console.log(this.state.updateInfo)
    }

    handleDeleteClick = (id) => {
        console.log('handleDeleteClick id', id)
        this.props.deleteAnimal(id)
    }

    playClick = () => {
        this.setState({
            video: !this.state.video
        })
    }
    
    
    render(){
        let yourList = this.props.ownList.map((el, i) => {
           return (
            <SingleCard key={i} name={el.name} status={el.status} id={el.id}
                population={el.population} weight={el.weight} 
                height={el.height} length={el.length} habitat={el.habitat}
                info={el.info} food={el.food} image={el.image} video={el.video}
                editInfo={this.state.editInfo} updateInfo={this.state.updateInfo} 
                videoState={this.state.video} 
                handleEditInfoClick={this.handleEditInfoClick} updateAnimalClick={this.updateAnimalClick}
                handleDeleteClick={this.handleDeleteClick} playClick={this.playClick} />
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