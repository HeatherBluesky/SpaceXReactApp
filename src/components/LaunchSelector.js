import React from "react";
import OptionItem from "./OptionItem";

const LaunchSelector = ({launches, onLaunchSelected}) => {

    const handleChange= (event) => {
        const chosenLaunch = launches[event.target.value]
        onLaunchSelected(chosenLaunch)
    }

   

    const LaunchOptions = launches.map((launch, index) => {
        return <OptionItem key={index} launch={launch} index={index}/>
    })    
    
    return (  
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>select a launch</option>
            {LaunchOptions}
        </select>

    );
}
 
export default LaunchSelector;