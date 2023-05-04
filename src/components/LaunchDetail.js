import React from 'react';

const LaunchDetail = ({launch}) => {



    return ( 
        <div className='launch-detail'>
            <a href={launch.links.webcast}><img id="launch-img" src={launch.links.patch.small} alt=""/></a>
            <audio controls>
                <source src = {launch.links.webcast} type='audio/mp4'></source>
            </audio>
            <p>Flight Number{launch.flight_number} launched : {launch.date_local} Details: {launch.details}</p>

        </div>
     );
}
 
export default LaunchDetail;