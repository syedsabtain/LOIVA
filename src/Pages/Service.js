import ListComp from "../AtomComponent/Listcomp"
import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"
// import Photogrid from '../images/grid.png'
import photo1 from '../images/g.png'
import photo2 from '../images/g1.jpg'
import photo3 from '../images/g2.jpg'
import photo4 from '../images/g5.jpg'
import serviceCard from '../images/servicecard.jpg'


const Services = () => {


  const ServiceData1 = [
    {
      icon: 'fas fa-users',
      text: 'wants to keep your employees happy and committed to their work'
    },
    {
      icon: 'fas fa-network-wired',
      text: 'wants to offer a pleasant and secure work environment'
    },
    {
      icon: 'fab fa-envira',
      text: 'is concerned about your environmental impact.'
    }
  ]
  const ServiceData2 = [
    {
      icon: 'fas fa-tools',
      text: 'MAINTENANCE'
    },
    {
      icon: 'fas fa-bicycle',
      text: 'E-BIKE SHOPS NETWORK'
    },
    {
      icon: 'fas fa-book',
      text: 'E-BIKES CATALOG'
    },
    {
      icon: 'fas fa-users',
      text: 'COMMUNITY'
    },
    {
      icon: 'fas fa-bicycle',
      text: 'SUSTAINABLE MOBILITY EXPERTISE'
    }
  ]

  return (
    <>
      <div className='bg-secondary'>
        <NavBar className=' pt-3 pb-20 lg:p-4 '></NavBar>
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                E-bike leasing, a wise mobility solution for your company
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4  text-gray-100 font-semibold">
                Mobility is changing
                New mobility needs wise solutions
              </p>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-200">
                Loïva offers a complete e-bike leasing service for companies to go towards sustainable mobility.
                Loïva takes you even further to promote a solution of wise mobility, a mobility that will:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Save
              </h6>
              <div className="mt-2 mb-4 text-gray-200 leading-7">
                <ul className='list-inside '>
                  <li>Resources</li>
                  <li>Spaces</li>
                  <li>Money</li>

                </ul>
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                BENEFIT
              </h5>
              <div className="mt-2 mb-4 text-gray-200 leading-7">
                <ul className='list-inside '>
                  <li>Attractiveness as employer</li>
                  <li>Well-being</li>
                  <li>Money</li>
                  <li>Environment</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                MINIMIZE
              </h5>
              <div className="mt-2 mb-4 text-gray-200 leading-7">
                <ul className='list-inside '>
                  <li>Greenhouse gases (GHG)</li>
                  <li>Injuries and accidents</li>
                  <li>Traffic jams and its consequences</li>
                  <li>Noise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" pb-40 relative bg-blueGray-100 ">

        <div className="-mt-56 lg:-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute  " style={{ height: 80 }}>
          <svg className="absolute bottom-0  overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
            <polygon className=" text-primary fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
        <div className="container mx-auto mt-36 lg:mt-0">
          <div className="flex flex-wrap items-center">
            <div className="w-12/12  md:w-6/12 lg:w-4/12 px-2  md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img alt="..." src={serviceCard} className="w-full align-middle rounded-t-lg" />
                <blockquote className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block" style={{ height: 95, top: '-94px' }}>
                    <polygon points="-30,95 583,95 583,65" className="text-primary fill-current" />
                  </svg>
                  <h4 className="text-3xl font-bold text-black">
                    Loïva
            </h4>
                  <p className="text-md font-semibold mt-2 text-black">

                    Loïva wants to be a facilitator of change. Loïva wants to remove barriers to make cycling accessible, pleasant and effective
            </p>
                  <p className="text-md font-light mt-2 text-black">Join our community and become part of the change
                    Together to go further</p>

                  <div className='mt-4'>
                    <a className="font-bold m text-blueGray-700 ease-linear transition-all duration-150 hover:underline hover:text-primary" href="/">Join Us <i className="fa fa-angle-double-right ml-1 leading-relaxed" /></a>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                OUR SERVICES
        </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Are you a conscious company looking to the future?
                Are you a company:
        </p>

              <ListComp data={ServiceData1} />

              <div className='mt-5 ml-3'>
                <a className="font-bold text-blueGray-700 hover:text-primary hover:underline ease-linear transition-all duration-150" href="/">View All <i className="fa fa-angle-double-right ml-1 leading-relaxed" /></a>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img alt="..." src={photo4} className="w-full align-middle rounded absolute shadow-lg transform   hover:scale-150 transition duration-500 ease-in-out cursor-pointer " style={{ maxWidth: 200, left: 217, top: '34px', zIndex: 3 }} />
                <img alt="..." src={photo1} className="w-full  align-middle rounded-lg absolute shadow-lg z-10 transform  hover:scale-150 transition duration-500 ease-in-out cursor-pointer" style={{ maxWidth: 250, left: 260, top: '-160px' }} />
                <img alt="..." src={ photo2} className="w-full align-middle rounded-lg absolute shadow-lg transform  hover:scale-150 transition duration-500 ease-in-out cursor-pointer" style={{ maxWidth: 300, left: 40, top: '-225px', zIndex: 2 }} />
                <img alt="..." src={photo3}  className="w-full align-middle rounded-lg absolute shadow-2xl transform  hover:scale-150 transition duration-500 ease-in-out cursor-pointer" style={{ maxWidth: 300, left: '-50px', top: 25 }} />
                {/* <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-menu.png" className="w-full align-middle rounded absolute shadow-lg" style={{ maxWidth: 580, left: '-20px', top: 210 }} /> */}
                {/* <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn-pink.png" className="w-full align-middle rounded absolute shadow-xl" style={{ maxWidth: 120, left: 195, top: 95 }} /> */}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center pt-32">

            <div className="mt-40 md:mt-0 w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 ml-auto mr-auto  text-center">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                We offer you a wise mobility turnkey service, an e-bike leasing including:
        </h3>


              <ListComp className='w-full md:pl-16 lg:pl-32 text-left ' data={ServiceData2} />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-10/12 px-12 md:px-4">
            <h2 className="font-semibold break-words  text-4xl">As partners of Loïva, you can become a true actor of wise environmental solutions that have a direct impact in the daily life of your employees' community</h2>

          </div>
        </div>
      </section>
      <Footer></Footer>

    </>
  )
}

export default Services