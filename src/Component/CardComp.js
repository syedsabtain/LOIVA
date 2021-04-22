import React from 'react'


const CardComp = ({children,className,imgSrc, imgClass}) =>{

    return(
        <div className={className}>
        <img className={imgClass} src={imgSrc} alt='CardImage'></img>
        {children}
      
    </div>
    )
}

export default CardComp;