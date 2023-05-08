import React from "react";

const LaunchSuccessItem = ({launch}) => {

    const displaySuccessIcon = (launch) => {
        if(launch.success === true) {
            return(
                <div>
                    <h3>Successfull</h3>
                    <span> &#9989; </span>

                </div>
            )
            }else{ 
                return(
                    <div>
                        <h3>UnSuccessful</h3>
                        <span> &#10060;</span>
                        <p> {launch.failures.reason}</p>
                    </div>
            )
        }
    }

    return(
        <p>{displaySuccessIcon(launch)}</p>
    )
};
export default LaunchSuccessItem