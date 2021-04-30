import React from 'react'


const BackgroundComp = ({children,backgroundimage,className,style}) =>{

    return(
        <div
        className={className}
        style={{
        background: `url(${backgroundimage})`,
        ...style
     
    }}>
        {children}
    </div>
    )
}

export default BackgroundComp;