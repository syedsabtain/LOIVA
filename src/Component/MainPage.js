
import backgroundimage from '../images/backgrounds-light.png'
import BackgroumdComp from './BackgroundComp'
import CardComp from './CardComp'
import cardimage1 from '../images/media-light-image.png'
import cardimage2 from '../images/media-light-image2.png'

import NavBar from './NavBar'
const button = {
    width: "212px",
    height: "63px",
    margin: "70px 399px 0 398px",
    padding: "20px 40px 21px",
    borderRadius: " 4px",
    backgroundColor: " #73c5c5"
}
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
            <BackgroumdComp
                className=' bg-no-repeat Backgrounds-Light    '
                backgroundimage={backgroundimage}>
                <NavBar className=''></NavBar>
                <div className='flex justify-center items-center mt-48'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1
                            className=' max-w-5xl font-bold  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl	text-white mb-11'>Cycling and MaaS combined, giving you more than a bike</h1>
                        <h5 className='max-w-5xl text-base md:text-xl leading-wide text-center  text-white'>Cycling as a Service for everyone, everywhere</h5>
                        <button className='max-w-52 h-16  pl-10 pr-10  bg-primary rounded mt-10'>
                            <span className='text-white   uppercase'>get the app</span>
                        </button>
                    </div>
                </div>
            </BackgroumdComp>
            <div className='flex justify-center items-center mt-20 ml-1 mr-1'>
                <div className=' m-auto flex flex-col justify-center items-center'>
                    <div className=' max-w-2xl lg:max-w-5xl text-center text-xl '>
                        <p>Cycling in daily life is no longer a problem.</p>

                        <p>If necessary, combine a bike with metro, train, choose intermodal trips.</p>

                        <p className='mt-6'>
                            Rent a car occasionally for the weekend and use a taxi as a solution for social
                            activities or even groceries.</p>

                        <p className='mt-6'>
                            Loïva offers choices for everyone, in every situation at any time.
                        </p>
                        <p>
                            Enjoy the combination of Cycling and Mobility as a Service (MaaS).</p>
                    </div>
                </div>
            </div>
            <div className='flex  flex-col justify-center  mt-20  '>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold tracking-wide '>Our Solutions</h2>
                    <h5 className='text-base p-5 pb-0 md:text-2xl mt-5 mb-10'>Connecting the cycling and alternative mobility modes</h5>
                    <div
                        className="grid  grid-rows-1 lg:grid-cols-2  mt-20 justify-center container items-center lg:gap-32 m-auto">
                        {cardData
                            ?.map((value, key) => {

                                return (
                                    <CardComp
                                        key={key}
                                        className='flex flex-col justify-center items-center ml-1 mr-1 mt-3 mb-2 lg:mt-0 lg:mb-0'
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
                                )
                            })}

                    </div>
                </div>
            </div>
            <div
                className='flex justify-center items-center  mt-20  m-auto text-center border-4 border-red RectangleLast'>
                <p className='lg:text-2xl max-w-4xl'>All mobility solutions can be customised to
                    meet your different daily travelling purposes, whether you’re private or B2B
                    customer</p>
            </div>
        </div>
    );
}

export default App;
