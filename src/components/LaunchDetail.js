import React from 'react';
import LaunchSuccessItem from './LaunchSuccessItem';

const LaunchDetail = ({launch}) => {
    return ( 
        <div className='launch-detail'>
            {/* <a href={launch.links.webcast}></a> */}
            {/* <audio controls>
                <source src = {launch.links.webcast} type='audio/mp4'></source>
            </audio> */}
            <h2>{launch.name}</h2>
            <h3>Launched</h3>
            <p>{launch.date_local} </p>
            <h4>Details: </h4>
            <p>{launch.details}</p> 
            <hr></hr>
            <a href = {launch.links.webcast} id='webcast-link'>Link to watch Official Launch Webcast </a>
            <br></br>
            <img id="craft-img" src={launch.links.patch.small}/>
            <LaunchSuccessItem launch={launch}/>


        </div>
     );
}
 
export default LaunchDetail;