import React, {Component} from 'react'
import Video from './../Video/Video'
import './SingleCard.css'

class SingleCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            video: false
        }
    }

    handleClosePopup = () => {
        this.setState({
            video: !this.state.video
        })
    }

    render(){
    return (
        
            <div className="fullCard" >
                <header className="header_yourList">
                    <img className="img_yourList" src={this.props.image} alt="animal" />
                    <div className="name_status">
                        <h2> {this.props.name} </h2>
                        <span> Status:
                            <mark className="status"> {this.props.status} </mark>
                        </span>
                    </div>
                </header>
                <div className="bulletPoints_yourList">
                    <div className="firstThree">
                        <span className="bp_span"> <mark className="height" > Height:</mark> {this.props.height} </span>
                        <span className="bp_span"> <mark className="weight"> Weight: </mark> {this.props.weight} </span>
                        <span className="bp_span"> <mark className="length"> Length: </mark> {this.props.length} </span>
                    </div>
                    <div className="secondThree"> 
                        <span className="bp_span"> <mark className="population">Population:</mark> {this.props.population} </span>
                        <span className="bp_span"> <mark className="habitat">Habitat:</mark> {this.props.habitat} </span>
                        <span className="bp_span"> <mark className="diet">Diet:</mark> {this.props.food} </span>
                    </div>
                    <div className="info_div">
                        Things to Know about the {this.props.name}
                        <p className="info_pContainer">
                            {this.props.info}
                        </p>
                    </div>
                </div>
                <footer className="all_btns">
                    {!this.props.editInfo ?
                        <button className="editBtn"
                            onClick={() => this.props.handleEditInfoClick()}> EDIT </button> :
                        <div> 
                            <textarea 
                                onChange={(e) => this.props.updateAnimalClick(e.target.value)}
                                />
                            <button className="submitBtn"
                                onClick={() => this.props.submitNewAnimalInfo(this.props.id, this.props.updateInfo)}
                                > 
                             SUBMIT 
                            </button>
                        </div>
                    }
                    <button className="playBtn"
                        onClick={() => this.setState({
                        video: !this.state.video
                        })}
                        > PLAY 
                    </button>
                    <button className="deleteBtn"
                        onClick={() => this.props.handleDeleteClick(this.props.id)}> 
                         DELETE 
                    </button>
                </footer>
            {this.state.video ? <Video handleClosePopup={this.handleClosePopup} video={this.props.video} /> : null}
            </div>
        
        )} 
    }

export default SingleCard


// return (
//     <div className="fullCard" key={i}> 
//         <header className="header_yourList"> 
//             <img className="img_yourList" src={el.image} alt="animal" />
//             <div className="name_status"> 
//                 <h2> {el.name} </h2>
//                 <span> Status: 
//                     <mark className="status"> {el.status} </mark> 
//                 </span>
//             </div>
//         </header>
//         <div className="bulletsPoints_yourList"> 
//             <div className="firstThree"> 
//                 <span className="bp_span"> <mark className="height">Height:</mark> {el.height} </span>
//                 <span className="bp_span"> <mark className="weight">Weight:</mark> {el.weight} </span>
//                 <span className="bp_span"> <mark className="length">Length:</mark> {el.length} </span>
//             </div>
//             <div className="secondThree"> 
//                 <span className="bp_span"> <mark className="population">Population:</mark> {el.population} </span>
//                 <span className="bp_span"> <mark className="habitat">Habitat:</mark> {el.habitat} </span>
//                 <span className="bp_span"> <mark className="diet">Diet:</mark> {el.food} </span>
//             </div>
//         </div>
//         <div className="info_div" >
//             Things to Know about the {el.name}
//             <p className="info_pContainer"> 
//                 {el.info}
//             </p>
//         </div>
//         <footer className="all_btns" > 
//             {!this.state.editInfo ?
//                 <button onClick={() => this.handleEditInfoClick()}> EDIT </button> :
//                 <div> 
//                     <textarea 
//                         onChange={(e) => this.updateAnimalClick(e.target.value)}
//                         />
//                     <button 
//                         onClick={() => this.props.submitNewAnimalInfo(el.id, this.state.updateInfo)}
//                         > 
//                             SUBMIT 
//                     </button>
//                 </div>
//             }
//             <button onClick={() => this.setState({
//                 video: !this.state.video
//             })}> PLAY </button>
//                 <button onClick={() => this.handleDeleteClick(el.id)}> 
//                         DELETE 
//                 </button> 
//         </footer>
//         {this.state.video ? <Video video={el.video} /> : null}
//     </div>
// )

