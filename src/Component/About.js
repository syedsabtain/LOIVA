import backgroundimage from '../images/anotherimg.jpg';
import backgroundsecond from '../images/aboutpg.jpg';
import backgroundvalue from '../images/values.jpg'

import BackgroumdComp from './BackgroundComp';
import CardComp from './CardComp';
import cardimage1 from '../images/media-light-image.png';
import cardimage2 from '../images/media-light-image2.png';
import about from '../images/about1.png';
import community from '../images/community.jpg';
import inclusion from '../images/inclusion.jpg';
import cohesion from '../images/cohesion.jpg';
import innovation from '../images/innovation.jpg';

import NavBar from './NavBar'
import Footer from './Footer';

const cardData = [
    {
        imgSrc: cardimage1,
        title: 'Cycling as a Service',
        pagaGraph: 'Enables B2B, B2C and individual customers to use bike leasing and maintenance se' +
                'rvices as they wish, and allows access to optional mobility modes.'
    }, {
        imgSrc: cardimage2,
        title: 'Mobility as a Service',
        pagaGraph: 'Allows customers to book and pay for diverse mobility options, and plan intermod' +
                'al trips. (subway, bus, taxi, scooter…)'
    }
]
const missionData  =[
    {
        imgSrc:community,
        title:'Community',
        pagaGraph:'To offer the best products and services, Loïva follows the core idea of being and working together. Change is created with a strong community of multiple expertise that support each other.'
    },
    {
        imgSrc:inclusion,
        title:'Inclusion',
        pagaGraph:'Inclusion means equality for everyone. Seeing things inclusively ensures the creation of accessible solutions, for long-term and for everyone, everywhere.'
    },
    {
        imgSrc:cohesion,
        title:'Cohesion',
        pagaGraph:'Cohesion represents solidarity, union through a common goal. Loïva’s partners will work with competence, confidence, and passion to offer a wise mobility solution.'
    },
    {
        imgSrc:innovation,
        title:'Innovation',
        pagaGraph:'Guided by a constant desire to offer our customers the best in terms of mobility, Loïva remains on the lookout for progress both in the bicycle industry and in good travel practices.'
    },
    
]
function App() {
    return (
        <div className="w-full">
            <BackgroumdComp
                className=' bg-no-repeat Backgrounds-Light    '
                backgroundimage={backgroundimage}>
                <NavBar className=''></NavBar>
                <div className='flex justify-center items-center mt-48 2xl:mt-50 '>
                    <div
                        className=' flex flex-col justify-center items-center shadow-2xl text-white bg-white-light max-w-6xl  rounded-md'
                        style={{
                        textShadow: "2px 2px 8px #000000"
                    }}>
                        <div className='    text-center p-10 pt-0 '>
                            <h1 className='text-4xl md:text-6xl mt-16 md:p-10 font-semibold '>OUR STORY</h1>
                            <div class="grid  grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-1 justify-center items-center ">

                                <div className=' flex justify-center items-center bg-white rounded-md p-4 hidden lg:block'>
                                    <img src={about} className='max-w-xs '></img>
                                </div>

                                <div className='col-span-2 text-left'>
                                    <h1 className='text-sm mt-9 md:text-lg md:p-10 font-semibold leading-8'>Loiva, in Finnish a gently
                                        slope, tells us that the way towards sustainable mobility is manageable and
                                        proceeds smoothly. To succeed we need to work together. Loïva will lead the way
                                        to a fairer and wiser mobility for us and future generations.</h1>
                                </div>
                            </div>
                            <div className='max-w-2xl text-center m-auto hidden md:block'>
                                <h1 className=' md:text-lg  md:p-10 font-semibold'>Loïva’s works according to four
                                    values: community, cohesion, inclusion and innovation. With Loïva, together to
                                    go further.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroumdComp>
            
            <BackgroumdComp
           className=' bg-no-repeat Backgrounds-Light    '
        //    backgroundimage={backgroundvalue}
           >
          <div className='text-center max-w-6xl  m-auto bg-white-midlight sticky text-black shadow-2xl	mt-36 top-5 rounded-md pb-8' style={{
                        textShadow: "2px 2px 8px white"
                    }}>
            <h1 className='text-3xl md:text-6xl p-10 font-semibold '>OUR MISSION</h1>
                <div class="grid  grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-1 justify-center items-center ">

                    <div className=' flex justify-center items-center  rounded-md p-4'>
                        <h1 className='text-lg lg:text-5xl md:text-2xl md:pb-0 font-semibold w-72 lg:pb-16 ' style={{lineHeight: 1.3}}>To remove barriers for sustainable mobility</h1>
                    </div>

                    <div className='col-span-2 md:text-left'>
                        <h1 className='text-base md:text-lg md:p-20 md:pt-7 md:pb-7 lg:p-10 font-semibold leading-8'>To facilitate the move towards sustainable mobility, Loïva offers new solutions, new innovative tools. Loïva offers an all-included service to move towards sustainable mobility.</h1>
                    </div>
                </div>
            </div>
            </BackgroumdComp>
            <BackgroumdComp
           className=' bg-no-repeat Backgrounds-Light    '
        //    backgroundimage={backgroundsecond}
           >
            <div className='flex  flex-col justify-center  mt-20  max-w-7xl m-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold  ' style={{
                        textShadow: "2px 2px 8px white"
                    }}>OUR VALUES</h2>
                    {/* <h5 className='text-base p-5 pb-0 md:text-2xl  mt-5 mb-10'>Connecting the cycling and alternative mobility modes</h5> */}
                    <div
                        className="grid  grid-rows-1 lg:grid-cols-2  mt-20 justify-center   container items-center lg:gap-4 m-auto" style={{maxWidth:'808px'}}>
                        {missionData
                            ?.map((value, key) => {

                                return (
                                    <div className="wrapper bg-gray-400 antialiased text-gray-900 mt-10 lg:mt-0" >
                                    <div>
                                      <img src={value.imgSrc} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" style={{maxWidth:'360px',maxHeight:'202px'}}/>    
                                      <div className="relative px-4 -mt-16  " style={{maxWidth:'360px'}}>
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                          {/* <div className="flex items-baseline">
                                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold ">
                                              New
                                            </span>
                                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold r">
                                              2 baths  • 3 rooms
                                            </div>  
                                          </div> */}
                                          <h4 className="mt-1 text-2xl font-semibold uppercase leading-tight text-black truncate" style={{
                        textShadow: "2px 2px 8px #00000057"
                    }} >{value.title}</h4>
                                          {/* <div className="mt-1">
                                            $1800
                                            <span className="text-gray-600 text-sm">   /wk</span>
                                          </div> */}
                                          <div className="mt-4">
                                            <span className="text-gray-600 text-sm font-semibold">{value.pagaGraph}</span>
                                            {/* <span className="text-sm text-gray-600">(based on 234 ratings)</span> */}
                                          </div>  
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                )
                            })}

                    </div>
                </div>
            </div>
            </BackgroumdComp>
            <div
                className='flex justify-center items-center  mt-20 mb-10 ml-2 mr-2 md:mt-32 md:m-auto  text-center border-4 border-red RectangleLast shadow-lg'>
                <p className='lg:text-2xl max-w-4xl pl-2 pr-2'>All mobility solutions can be
                    customised to meet your different daily travelling purposes, whether you’re
                    private or B2B customer</p>
            </div>
            <div className='mt-32'>
                <Footer></Footer>
            </div>

        </div>
    );
}

export default App;
