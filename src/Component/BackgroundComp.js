import React from 'react'


const BackgroundComp = ({children,backgroundimage,className}) =>{

    return(
        <div
        className={className}
        style={{
        background: `url(${backgroundimage})`,
     
    }}>
        {children}
    </div>
    )
}

export default BackgroundComp;