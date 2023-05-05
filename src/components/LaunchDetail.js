import React from 'react';

const LaunchDetail = ({launch}) => {
    return ( 
        <div className='launch-detail'>
            {/* <a href={launch.links.webcast}></a> */}
            {/* <audio controls>
                <source src = {launch.links.webcast} type='audio/mp4'></source>
            </audio> */}
            <h1>{launch.name}</h1>
            <h2>Launched</h2>
            {launch.date_local} 
            <h3>Details: </h3>
            {launch.details}
            <hr></hr>
            <a href = {launch.links.webcast}>Link to watch Official Launch Webcast</a>
            <p>image of craft</p>
            <img id="craft-img" src={launch.links.patch.small}/>


        </div>
     );
}
 
export default LaunchDetail;