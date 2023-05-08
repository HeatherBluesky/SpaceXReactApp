import React, {useState, useEffect} from 'react';
import LaunchList from '../components/LaunchList';
import LaunchDetail from '../components/LaunchDetail';
import LaunchSelector from '../components/LaunchSelector';
import LaunchFilter from '../components/LaunchFilter';
import LaunchSuccessItem from '../components/LaunchSuccessItem';
import cat_launch from '../../src/cat_launch.gif';



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
    
    
    


    return (
        <>
         
        <h1>Over Yonder </h1>
      
        <a href = {"https://shop.spacex.com/"}><button>Out of this world Products </button></a> 
        {launches?<LaunchSelector launches={launches} onLaunchSelected={onLaunchClicked}/>: null}
        {selectedLaunch? <LaunchDetail launch={selectedLaunch}/> : <img src={cat_launch} alt='cat'/>}        
        {/* {launches.length > 1 ?<LaunchList launches={launches} onLaunchClicked={onLaunchClicked} /> : null} */}
        {/* {selectedLaunch ? <LaunchDetail launch={selectedLaunch}/> : null} */}
        </>
    )
    }

export default SpaceXContainer;