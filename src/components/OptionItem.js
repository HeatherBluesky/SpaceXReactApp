import React from 'react';
const OptionItem = ({index, launch}) => {
    return ( 
        <option value={index}>{launch.name}</option>
     );
}
 
export default OptionItem;