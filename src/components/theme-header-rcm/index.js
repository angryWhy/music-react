import React, { memo } from 'react'
import {HeaderWrapper} from './style'
import PropTypes from 'prop-types'
const ThemeHeaderRMC= memo(function (props) {
    const {title,keywords=[]}=props
    return (
        <HeaderWrapper className="sprite_02">
            <div className='left'>
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item,index)=>{
                            return(
                                <div className="item" key={index}>
                                    <a href="todo">{item}</a>
                                    {
                                        index<keywords.length-1?<span className="divider">|</span>:""
                                    }
                                    
                                </div>
                            )
                    }
                    )
                    }
                </div>
            </div>
            <div className='right'>
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>

        </HeaderWrapper>
    )
})
//传入属性校验
ThemeHeaderRMC.propTypes={
    title:PropTypes.string.isRequired,
    keywords:PropTypes.array
}
export default ThemeHeaderRMC;