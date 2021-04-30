

const OurTeamCard = ({Mainclass,titleClass,paragraphClass, emailClass, iconClass,imgSrc,title,paragraph,email,customeStyle})=>{

    return(
        <div  className={`m-auto md:ml-4 md:mr-4 w-full mt-5 md:mt-0 text-white   h-full p-3 lg:w-2/5 sm:w-4/4 md:w-2/4 rounded text-center py-8 bg-secondary ${Mainclass}`}
                  style={customeStyle}>

                  <div className="flex justify-center mb-2"> <div  alt={title} style={{backgroundImage:`url(${imgSrc})`}} className="rounded-full bg-center bg-no-repeat  bg-cover h-24 w-24 flex items-center justify-center" /> </div>
                  <h1 className={`text-3xl ${titleClass}`}>{title}</h1> 
                  <div className={`text-sm pt-3  m-auto ${paragraphClass} overflow-y-hidden`} style={{height:'90px'}}>{paragraph}</div>
                  <div className={`pt-5 hover:underline cursor-pointer  font-semibold ${emailClass}`}>{email}</div>
                  <div className="mt-3 text-white  h-11 w-full object-bottom ">

                    <a href='/' ><i className={`fab fa-twitter fa-2x cursor-pointer hover:text-primary ${iconClass}`}></i></a>
                    <a href='/'><i className={`fab fa-linkedin fa-2x ml-3 cursor-pointer hover:text-primary ${iconClass}`}></i></a>

                  </div>
                </div>
    )
}

export default OurTeamCard;