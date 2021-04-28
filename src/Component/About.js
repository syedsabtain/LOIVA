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
import BackgroundComp from './BackgroundComp';

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
                className=' bg-no-repeat Backgrounds-Light   aboutpagebg  '
                
                backgroundimage={backgroundimage}>
 
                  <div className='overlayDiv'>
          <NavBar className='p-4' ></NavBar>
                  
                  <div className=' w-full block relative '>
                  

                            <div className='flex justify-center items-center mt-48 2xl:mt-72  '>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1
                            className=' max-w-5xl font-bold  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl	text-white mb-11'>About Us</h1>
                        <h5 className='  max-w-xl text-base md:text-xl  leading-wide text-center  text-white'>Loiva, in Finnish a gently
                                        slope, tells us that the way towards sustainable mobility is manageable and
                                        proceeds smoothly. To succeed we need to work together. Loïva will lead the way
                                        to a fairer and wiser mobility for us and future generations.</h5>
                        <h5 className='max-w-xl mt-4  text-base md:text-xl  leading-wide text-center  text-white'>Loïva’s works according to four
                                    values: community, cohesion, inclusion and innovation. With Loïva, together to
                                    go further.</h5>
                       
                    </div>
                </div>
                  </div>
                </div>
            </BackgroumdComp>
            
            <BackgroundComp 
              className=' bg-no-repeat Backgrounds-Light misssionpagebg    '
                
              backgroundimage={backgroundsecond }>
              <>
              <div className='overlaymission'>
              {/* Container */}
<div className="container mt-20  mx-auto  border-4 border-red-600  opacity-100 " style={{opacity:"1 !important"}}>
  {/* Card wrapper */}
  <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto  border-4   border-primary rounded" style={{height:'500px'}}>
    {/* Card image */}
    <div className="bg-cover bg-no-repeat bg-center border w-full md:w-1/3 h-64 md:h-auto relative " style={{backgroundImage: `url(${backgroundsecond})`}}>
      
    </div>
    {/* ./Card image */}
    {/* Card body */}
    <div className="w-full md:w-2/3 shadow-inner border-4 border-gray-100 " style={{background:'transparent'}}>
      {/* Card body - outer wrapper */}
      <div className="h-full mx-auto px-6 md:px-0 md:pt-20 md:pb-12 lg:pt-6 md:-ml-6 relative lg:pb-6">
        {/* Card body - inner wrapper */}
        <div className="bg-white lg:h-full p-6 -mt-6 md:mt-14 lg:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded border shadow-2xl border-primary">
          {/* Card title and subtitle */}
          <div className="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3 className="text-4xl font-semibold">Our Mission</h3>
            <p className="mb-0 mt-3 text-grey-dark text-sm italic">
            To remove barriers for sustainable mobility 
            </p>
            <hr className="w-full  md:ml-0 mt-4  border lg:hidden" />
          </div>
          {/* ./Card title and subtitle */}
          {/* Card description */}
          <div className="w-full lg:w-3/5 lg:px-3">
            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
            To facilitate the move towards sustainable mobility, Loïva offers new solutions, new innovative tools. Loïva offers an all-included service to move towards sustainable mobility.
            </p>
          </div>
          {/* ./Card description */}
          {/* Call to action button */}
          {/* <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
              Visit now
            </button>
          </div> */}
          {/* ./Call to action button */}
        </div>
        {/* ./Card body - inner wrapper */}
      </div>
      {/* ./Card body - outer wrapper */}
    </div>
    {/* ./Card body */}
  </div>
  {/* ./Card wrapper */}
</div>
{/* ./Container */}
</div>
</>
              
            </BackgroundComp>
          
            
            <BackgroumdComp
           className=' bg-no-repeat Backgrounds-Light    '
        //    backgroundimage={backgroundsecond}
           >
            <div className='flex  flex-col justify-center  mt-20  max-w-7xl m-auto'>
                <div className='text-center  p-10 rounded'>
                    <h2 className='text-4xl md:text-4xl font-extrabold  ' style={{
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
                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-primary">
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
