import React, {useState, useEffect} from 'react';
import LaunchList from '../components/LaunchList';
import LaunchDetail from '../components/LaunchDetail';
import LaunchSelector from '../components/LaunchSelector';
import LaunchFilter from '../components/LaunchFilter';


const SpaceXContainer = () => {
    const [launches, setLaunches] = useState([])
    const [selectedLaunch, setSelectedLaunch] = useState(null)
    const [filteredLaunch, setFilteredLaunch] = useState(null)
    
    useEffect(() => {
      getLaunches();
    }, [])


    const onLaunchClicked = (launch) => {
        setSelectedLaunch(launch)
      }

    const onFilterClicked = (launch) => {
        setFilteredLaunch(launch)
      
    }

    const getLaunches = function() {
        fetch("https://api.spacexdata.com/v5/launches/")
        .then(results => results.json())
        .then(data => setLaunches(data))
    }


    return(
        <>
        <h1>What Space Craft Did What? </h1>
        {launches? <LaunchFilter launches={launches} onLaunchFiltered={onFilterClicked}/> :null}
        {/* {launches.length > 1 ?<LaunchList launches={launches} onLaunchClicked={onLaunchClicked} /> : null} */}
        {/* {selectedLaunch ? <LaunchDetail launch={selectedLaunch}/> : null} */}
        {launches?<LaunchSelector launches={launches} onLaunchSelected={onLaunchClicked}/>: null}
        {selectedLaunch? <LaunchDetail launch={selectedLaunch}/> : null}
        
        <b></b>
        <b></b>
        
        <a href = {"https://shop.spacex.com/"}><button>Out of this world Products </button></a> 
        </>
    )
}

export default SpaceXContainer;