import React from 'react';

const LaunchDetail = ({launch}) => {
    return ( 
        <div className='launch-detail'>
            {/* <a href={launch.links.webcast}></a> */}
            <a href = {launch.webcast}><h4>{launch.name}</h4></a>
            {/* <audio controls>
                <source src = {launch.links.webcast} type='audio/mp4'></source>
            </audio> */}
            <p>{launch.name} launched : {launch.date_local} Details: {launch.details}</p>

        </div>
     );
}
 
export default LaunchDetail;