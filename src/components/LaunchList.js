import React from 'react';
import LaunchItem from './LaunchItem';

const LaunchList = ({launches, onLaunchClicked}) => {

    const launchItems = launches.map((launch, index) => {
        return <LaunchItem launch={launch} key={index} onLaunchClicked={onLaunchClicked}/>

    })
    return (  
        <div>
            <ul>
                {launchItems}
                <a href = {"https://shop.spacex.com/"}><button>Out of this world Products </button></a> 
            </ul>

        </div>
    );
}
 
export default LaunchList;