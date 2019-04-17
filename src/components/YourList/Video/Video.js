import React from 'react';
import './Video.css'

const Video = (props) => (
    <div className='fullScreen'>
        <div className="video">
            <iframe width="660" height="415" src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> 
            </iframe>
        </div>
        <button className="xBtn"
            onClick={() => props.handleClosePopup()}
            > 
            X 
        </button>
    </div>
)

export default Video