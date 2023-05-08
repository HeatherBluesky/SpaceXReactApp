import React from 'react';
import LaunchSuccessItem from './LaunchSuccessItem';

const LaunchDetail = ({launch}) => {
    return ( 
        <div className='launch-detail'>       
            <a href = {launch.links.webcast} id='webcast-link'>Link to watch Official Launch Webcast </a>
            <h2>{launch.name}</h2>
            <h3>Launched</h3>
            <p>{launch.date_local} </p>
            <LaunchSuccessItem launch={launch}/>
            <h4>Details: </h4>
            <p>{launch.details}</p> 
            <img id="craft-img" src={launch.links.patch.small}/>
            <a href = {launch.links.flickr.original}><img id="launch-img" src={launch.links.flickr.original} /></a>
           


        </div>
     );
}
 
export default LaunchDetail;