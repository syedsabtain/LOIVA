import React from 'react'


const CardComp = ({children,className,imgSrc, imgClass}) =>{

    return(
        <div className={className}>
        <img className={imgClass} src={imgSrc}></img>
        {children}
        {/* <div>
          <h2>Cycling as a Service</h2>
          <h4>Enables B2B, B2C and individual customers to use bike leasing and maintenance services as they wish, and allows access to optional mobility modes.</h4>
    <button className='' style={button}>get the app</button>

        </div> */}
    </div>
    )
}

export default CardComp;