import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"



const Contact = () =>
{
    return(
        <>
        
        <section className="pb-20 relative block bg-primary " >
        <NavBar className='pt-3 pb-20 lg:p-4 '></NavBar>
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
                Contact us
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                {/* Put the potentially record low maximum sea ice extent tihs year down to low ice. */}
                {/* According to the National Oceanic and Atmospheric Administration, Ted, Scambos. */}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                {/* <i className="fas fa-medal text-xl"></i> */}
                <i className="fas fa-phone"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
              Phone
              </h6>
              <p className="mt-2 mb-4 text-gray-100">
              +358 40 040 6780
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                {/* <i className="fas fa-poll text-xl"></i> */}
                <i className="far fa-envelope"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
              Email
              </h5>
              <p className="mt-2 mb-4 text-gray-100">
              info@loiva.eu​
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                {/* <i className="fas fa-lightbulb text-xl"></i> */}
                <i className="fas fa-share-alt"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Follow us
              </h5>
              <div className="mt-2 mb-4 text-gray-500">
              <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className=" relative block py-24 lg:pt-0 mt-12 lg:mt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-40 md:-mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Contact
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
        </>
    )
}
export default Contact