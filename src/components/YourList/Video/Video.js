import React from 'react';

const Video = (props) => (
    <div>
        <div className="video">
            <iframe width="560" height="315" src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> 
            </iframe>
        </div>
    </div>
)

export default Video