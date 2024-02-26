import React from "react";

/**
 * 
 * @param selected true if budget tab selected, false if Net worth tab selected.
 * 
 */

const MainToggle = ({selected}) => {
    return(
        <div className="inLine">
            <button className={selected ? "selected" : "unselected"}>Budget</button>
            <button className={selected ? "unselected" : "selected"}>Net Worth</button>
        </div>
    )
}

export default MainToggle