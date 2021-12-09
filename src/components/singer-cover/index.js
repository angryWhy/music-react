import React, { memo } from 'react'
import {SingerCoverA} from './style'

export default memo(function SingerCover(props) {
    const{name}=props.info;
    return (
        <SingerCoverA>
          
            <div className="image"><img src={props.cover} alt="" className="image" 
            width={props.size} height={props.size}/></div>
            <div className="content">
            <div className="name">{name}</div>
            <p className="describe">{props.briefDesc}</p>
            </div>
            
        </SingerCoverA>
    )
})
