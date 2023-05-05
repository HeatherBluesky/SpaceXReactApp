import React from "react"


const LaunchFilter = ({launches, onLaunchFiltered}) => {
    
    
    
    return (  
        <li>
                <form action="/filter" method="GET">
                    <div class="input-field">
                        <input type="text" id='search-form' name='search-form' placeholder="successful??"/>
                        <button type="submit">Blast Off</button>
                        
                    </div> 
                </form>
            </li>
    );
}
 



export default LaunchFilter;