import React from 'react';

const LaunchItem = ({launch, onLaunchClicked}) => {

    const handleClick = () => {
        console.log("clicked on " + launch.name);
        onLaunchClicked(launch)
    }


    return ( 
        <li onClick={handleClick}>{launch.name}</li>
     );
}
 
export default LaunchItem;