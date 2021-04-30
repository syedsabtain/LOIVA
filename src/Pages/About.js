// import backgroundimage from '../images/anotherimg.jpg';
import backgroundsecond from '../images/aboutpg.jpg';
// import Photogrid from '../images/grid.png'
import Photo1 from '../images/g1.jpg'

import BackgroundComp from '../AtomComponent/BackgroundComp';
// import cardimage1 from '../images/media-light-image.png';
// import cardimage2 from '../images/media-light-image2.png';
import community from '../images/community.jpg';
import inclusion from '../images/inclusion.jpg';
import cohesion from '../images/cohesion.jpg';
import innovation from '../images/innovation.jpg';

import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer';
import OurTeamCard from '../AtomComponent/OutTeamCard';
import ValueCard from '../AtomComponent/ValueCard';
import MissionCard from '../AtomComponent/MainCard'

// const cardData = [
//     {
//         imgSrc: cardimage1,
//         title: 'Cycling as a Service',
//         pagaGraph: 'Enables B2B, B2C and individual customers to use bike leasing and maintenance se' +
//                 'rvices as they wish, and allows access to optional mobility modes.'
//     }, {
//         imgSrc: cardimage2,
//         title: 'Mobility as a Service',
//         pagaGraph: 'Allows customers to book and pay for diverse mobility options, and plan intermod' +
//                 'al trips. (subway, bus, taxi, scooter…)'
//     }
// ]
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
const ourTeamData = [
  {
    imgSrc:'https://www.loiva.eu/wp-content/uploads/2020/09/PortraitML.png',
    title:'Martial Labarthe',
    paragraph:'Martial is a mobility expert and especially passionate about cycling. He has a rich international experience in city planning',
    email:'martial.labarthe@loiva.eu'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    title:'Oliver Jack',
    paragraph:'Martial is a mobility expert and especially passionate about cycling. He has a rich international experience in city planning',
    email:'martial.labarthe@loiva.eu'
  },
  {
    imgSrc:'https://uberone.net/wp-content/uploads/2020/11/13-45-26-free-profile-photo-whatsapp-4.png',
    title:'Connor Liam',
    paragraph:'Martial is a mobility expert and especially passionate about cycling. He has a rich international experience in city planning ',
    email:'martial.labarthe@loiva.eu'
  }
]
function App() {
    return (
      <div className="w-full">
        <BackgroundComp
          className=' bg-no-repeat Backgrounds-Light   aboutpagebg  '

          backgroundimage={Photo1}>

          <div className='overlayDiv'>
            <NavBar className='pt-3 pb-20 lg:p-4 ' ></NavBar>

            <div className=' w-full block relative '>


              <div className='flex justify-center items-center mt-48 2xl:mt-72  '>
                <div className=' flex flex-col justify-center items-center'>
                  <h1
                    className=' max-w-5xl  font-bold  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl	text-white mb-11'>About Us</h1>
                  <h5 className='  max-w-xl p-2 text-base md:text-xl  leading-wide text-center  text-white'>Loiva, in Finnish a gently
                  slope, tells us that the way towards sustainable mobility is manageable and
                  proceeds smoothly. To succeed we need to work together. Loïva will lead the way
                                        to a fairer and wiser mobility for us and future generations.</h5>
                  <h5 className='max-w-xl mt-4 p-2 text-base md:text-xl  leading-wide text-center  text-white'>Loïva’s works according to four
                  values: community, cohesion, inclusion and innovation. With Loïva, together to
                                    go further.</h5>

                </div>
              </div>
            </div>
          </div>
        </BackgroundComp>

        <BackgroundComp
          className=' bg-no-repeat Backgrounds-Light misssionpagebg    '

          backgroundimage={backgroundsecond}>
          <>
            <div className='overlaymission'>

            </div>
          </>

        </BackgroundComp>
        <div className='absolute items-center w-full z-10 m-auto -mt-80 h-full ' >
        
          <MissionCard
          title='Our Mission'
          subTitle='To remove barriers for sustainable mobility'
          backgroundImage={backgroundsecond}
          paragraph=' To facilitate the move towards sustainable mobility, Loïva offers new solutions, new innovative tools. Loïva offers an all-included service to move towards sustainable mobility.'
          />
        </div>

        <div className='w-full h-60'>

        </div>
        
        <BackgroundComp
          className=' bg-no-repeat  static overflow-hidden'
        >
          <div className='flex  flex-col justify-center  mt-20  max-w-7xl m-auto bg-primary bgtransform'  >
            <div className='text-center  p-10 rounded  divtransform' >
              <h2 className='text-4xl md:text-4xl font-extrabold  ' style={{
                textShadow: "2px 2px 8px white"
              }}>OUR VALUES</h2>
              <div
                className="grid  grid-rows-1 lg:grid-cols-2  mt-20 justify-center   container items-center lg:gap-4 m-auto" style={{ maxWidth: '808px' }}>
                {missionData
                  ?.map((value, key) => {

                    return (
                     
                      <ValueCard
                      key={key}
                      title={value.title}
                      pagaGraph={value.pagaGraph}
                      imgSrc={value.imgSrc}

                      />

                    )
                  })}

              </div>
            </div>
          </div>
        </BackgroundComp>
        <div
          className='flex justify-center items-center  mt-20 mb-10 ml-2 mr-2 md:mt-9 bg-transparent md:m-auto  text-center border-4 border-red RectangleLast shadow-lg'>
          <h1 className='text-4xl font-semibold'>Our Team</h1>

        </div>
        <div>
          <div className="m-auto h-full flex-col md:flex md:flex-row justify-center items-center ">
            {ourTeamData.map((value, key) => {
              return (

                <OurTeamCard

                key={key}
                title={value.title}
                imgSrc={value.imgSrc}
                paragraph={value.paragraph}
                email={value.email}
                Mainclass={` ${ourTeamData.length === (key + 1) ? ('md:hidden 2xl:block') : ('block')} `}
                customeStyle={{width:'408px'}}
                />
              )
            })}

          </div>
        </div>
        <div className='mt-32'>
          <Footer></Footer>
        </div>

      </div>
    );
}

export default App;
