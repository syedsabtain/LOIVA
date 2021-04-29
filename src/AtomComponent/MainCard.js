


const MainCard = ({backgroundImage,title,subTitle,paragraph, MaincClass}) =>{

    return (
        <div className={`container mt-20  mx-auto     opacity-100  ${MaincClass}`} style={{ opacity: "1 !important" }}>
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto  border-4   border-primary rounded" style={{ height: '500px' }}>
          <div className="bg-cover bg-no-repeat bg-center border w-full md:w-1/3 h-64 md:h-auto relative " style={{ backgroundImage: `url(${backgroundImage})` }}>

          </div>
          <div className="w-full md:w-2/3 shadow-inner border-4 border-gray-100 " style={{ background: 'transparent' }}>
            <div className="h-full  mx-auto px-6 md:px-0 md:pt-20 md:pb-12 lg:pt-6 md:-ml-6 relative lg:pb-6">
              {title ? (
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-14 lg:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded border shadow-2xl border-primary">
                  <div className="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="text-4xl font-semibold">{title}</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      {subTitle}
          </p>
                    <hr className="w-full  md:ml-0 mt-4  border lg:hidden" />
                  </div>
  
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                     {paragraph}
          </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-14 lg:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded border shadow-2xl border-primary">
               

                <div className="w-full lg:w-4/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-lg"
                  style={{display:'table'}}>
                   {paragraph}
        </p>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}


export default MainCard