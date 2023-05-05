import React from 'react';

const LaunchDetail = ({launch}) => {
    return ( 
        <div className='launch-detail'>
            {/* <a href={launch.links.webcast}></a> */}
            {/* <audio controls>
                <source src = {launch.links.webcast} type='audio/mp4'></source>
            </audio> */}
            <h2>{launch.name}</h2>
            <h3>Launched</h3>
            {launch.date_local} 
            <h4>Details: </h4>
            {launch.details} 
            <hr></hr>
            <a href = {launch.links.webcast} id='webcast-link'>Link to watch Official Launch Webcast </a>
            <br></br>
            <img id="craft-img" src={launch.links.patch.small}/>


        </div>
     );
}
 
export default LaunchDetail;