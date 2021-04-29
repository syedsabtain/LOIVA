


const ValueCard = ({imgSrc,title,pagaGraph, MainClass})=>{

    return(
                    <div className={`wrapper bg-gray-400 antialiased text-gray-900 mt-10 lg:mt-0 ${MainClass}`} >
                        <div>
                          <img src={imgSrc} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" style={{ maxWidth: '360px', maxHeight: '202px' }} />
                          <div className="relative px-4 -mt-16  " style={{ maxWidth: '360px' }}>
                            <div className="bg-white p-6 rounded-lg shadow-lg border border-primary">
                              <h4 className="mt-1 text-2xl font-semibold uppercase leading-tight text-black truncate" style={{
                                textShadow: "2px 2px 8px #00000057"
                              }} >{title}</h4>

                              <div className="mt-4">
                                <span className="text-gray-600 text-sm font-semibold">{pagaGraph}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
    )
}

export default ValueCard