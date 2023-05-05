import React from 'react';
const FilterItem = ({onLaunchFIltered, launch}) => {

    const filteredClick = () => {
      console.log("submitted" + launch.success)
      onLaunchFiltered(launch)
    }
    return ( 
        <div>
        <li onClick={filteredClick}> {launch.success}</li>
        {/* <option value={index}>{launch.name}</option> */}
        </div>
     );
}
 
export default FilterItem;