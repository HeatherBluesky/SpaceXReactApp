import React, {useState, useEffect} from 'react';
import LaunchList from '../components/LaunchList';
import LaunchDetail from '../components/LaunchDetail';
import LaunchSelector from '../components/LaunchSelector';

const SpaceXContainer = () => {
    const [launches, setLaunches] = useState([])
    const [selectedLaunch, setSelectedLaunch] = useState(null)
    
    useEffect(() => {
      getLaunches();
    }, [])


    const onLaunchClicked = (launch) => {
        setSelectedLaunch(launch)
      }

    const getLaunches = function() {
        fetch("https://api.spacexdata.com/v5/launches/")
        .then(results => results.json())
        .then(data => setLaunches(data))
    }
    return(
        <>
        <h1>SPACE X CONTAINER</h1>
        {/* {launches.length > 1 ?<LaunchList launches={launches} onLaunchClicked={onLaunchClicked} /> : null} */}
        {/* {selectedLaunch ? <LaunchDetail launch={selectedLaunch}/> : null} */}
        {launches?<LaunchSelector launches={launches} onLaunchSelected={onLaunchClicked}/>: null}
        {selectedLaunch? <LaunchDetail launch={selectedLaunch}/> : null}
        </>
    )
}

export default SpaceXContainer;