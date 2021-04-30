import React from 'react'


const CardComp = ({children,className,imgSrc, imgClass, style,mission=false}) =>{

    return(
        <div className={className} style={style}>
        <img className={imgClass} src={imgSrc} alt='CardImage' style={mission ? ({maxWidth:'320px', maxHeight:'179px'}): ({})}></img>
        {children}
      
    </div>
    )
}

export default CardComp;