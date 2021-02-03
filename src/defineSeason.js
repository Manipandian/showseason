import './defineSeason.css';
import React from "react";


const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, It is chilly",
        iconName: "snowflake"
    }
}

const findSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}

const DefineSeason = props => {
let season = findSeason(props.lat, new Date().getMonth());
const {text, iconName} = seasonConfig[season];

    return (
        <div className={`define-season ${season}`}>
            <i className={`left-icon massive ${iconName} icon`}></i>
            <h1 className="text-align">{text}</h1>
            <i className={`right-icon massive ${iconName} icon`}></i>
        </div>
    )
}

export default DefineSeason;