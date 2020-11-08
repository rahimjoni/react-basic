import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './seasonDis.css'

const seasonConfigre = {
    Winter:{
        text: "Burr, its is cold !",
        iconName: 'snowflake'
    },
    Summer:{
        text: "Lets go to the beach !",
        iconName: 'sun'
    }
}

const getSeason =(lat,month) =>{
    if (month>2 && month<9){
        return lat>0?'Summer':'Winter'
    }else {
        return lat>0?'Winter':'Summer'
    }

}
function SeasionDis(props) {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfigre[season]
    return (
        <div className="changeseacon">
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1 className={`content`}>{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    );
}

export default SeasionDis;