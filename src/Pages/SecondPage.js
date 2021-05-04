
import backgroundimage from '../images/backgrounds-light.png'
// import BackgroumdComp from './BackgroundComp'
import CardComp from '../AtomComponent/CardComp'
import cardimage1 from '../images/media-light-image.png'
import cardimage2 from '../images/media-light-image2.png'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer';
import BackgroundComp from '../AtomComponent/BackgroundComp'
import MissionCard from '../AtomComponent/MainCard'
import bg1 from '../images/bg1.jpg'

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
function App() {
    return (
        <div className="w-full">
            <BackgroundComp
                className=' bg-no-repeat Backgrounds-Light   aboutpagebg    '
                backgroundimage={backgroundimage}>
                
                
                <NavBar className=' pt-3 pb-20 lg:p-4 '></NavBar> 
                <div className='flex justify-center items-center mt-48 pt-4 2xl:mt-72'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1
                            className=' max-w-5xl font-bold  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl	text-white mb-11'>Cycling and MaaS combined, giving you more than a bike</h1>
                        <h5 className='max-w-5xl  text-base md:text-xl  leading-wide text-center  text-white'>Cycling as a Service for everyone, everywhere</h5>
                        <button className='w-64 lg:w-50 h-16  pl-10 pr-10  bg-primary rounded mt-10'>
                            <span className='text-white font-bold lg:font-semibold  uppercase'>get the app</span>
                        </button>
                    </div>
                </div>
            
               
            </BackgroundComp>
            <BackgroundComp
          className=' bg-no-repeat Backgrounds-Light misssionpagebg    '

          backgroundimage={bg1}>
          <>
            <div className=' '>

            </div>
          </>

        </BackgroundComp>
        <div className='absolute items-center w-full z-10 m-auto -mt-80 h-full' >
        
          <MissionCard
        
          backgroundImage={bg1}
          paragraph=' Cycling in daily life is no longer a problem. If necessary, combine a bike with metro, train,
          choose intermodal trips. Rent a car occasionally for the weekend and use a taxi as a solution for social Loïva offers choices for everyone, in every situation at any time.
          Enjoy the combination of Cycling and Mobility as a Service (MaaS).'
          />
        </div>

        <div className='w-full h-60'>

        </div>
        <div className='w-full h-96 md:hidden ' style={{height:'200px'}}>

        </div>  
           
            <div className='flex  flex-col justify-center  mt-20  '>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold tracking-wide '>Our Solutions</h2>
                    <h5 className='text-base p-5 pb-0 md:text-2xl  mt-5 mb-10'>Connecting the cycling and alternative mobility modes</h5>
                    <div
                        className="grid  grid-rows-1 lg:grid-cols-2  mt-20 justify-center container items-center lg:gap-32 m-auto">
                        {cardData
                            ?.map((value, key) => {

                                return (
                                    <div className='flex  flex-col justify-center  items-center' key={key}>
                                        <CardComp
                                        style={{maxWidth:'568px'}}
                                        key={key}
                                        className=' ml-1 mr-1 mt-5 mb-2 lg:mt-0 lg:mb-0 shadow p-5   border border-primary rounded-md'
                                        imgSrc={value.imgSrc}
                                        imgClass=" max-w-lg	 max-h-sm container top">
                                        <div className="flex flex-col justify-center items-center w-auto">
                                            <h2 className='text-2xl font-extrabold tracking-tight mt-5 pb-5 '>{value.title}</h2>
                                            <h4 className=' text-sm lg:w-72 w-72 mb-5 h-20'>{value.pagaGraph}</h4>
                                            <button className='RectangleCard  mt-8 '>
                                                <span className=' get-the-app uppercase'>More</span>
                                            </button>

                                        </div>
                                    </CardComp>
                                        </div>
                                )
                            })}

                    </div>
                </div>
            </div>
            <div
                className='flex justify-center items-center  mt-20 mb-10 ml-2 mr-2 md:mt-32 md:m-auto  text-center border-4 border-red RectangleLast shadow-lg'>
                <p className='lg:text-2xl max-w-4xl pl-2 pr-2'>All mobility solutions can be customised to
                    meet your different daily travelling purposes, whether you’re private or B2B
                    customer</p>
            </div>
            <div className='mt-32'>
                <Footer></Footer>
            </div>

        </div>
    );
}

export default App;
