import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  let location = useLocation();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 pb-10">
            <h4 className="text-3xl font-semibold">
            Loïva
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Together to go further.
            </h5>
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
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-md font-semibold mb-2">
                  Pages
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link 
                    className={classNames(
                      '/' === location.pathname ? 'text-gray-700 text-secondary ' : 'text-gray-700 hover:text-primary hover:underline font-semibold block pb-2 text-sm'
                    )}
                         to='/'>Home
                    </Link>
                  </li>
                  <li>
                    <Link className={classNames(
                      '/Services' === location.pathname ? 'text-gray-700 text-secondary ' : 'text-gray-700 hover:text-primary hover:underline font-semibold block pb-2 text-sm'
                    )}
                         to='/Services'>Services
                    </Link>
                  </li>
                  <li>
                    <Link className={classNames(
                      '/About-us' === location.pathname ? 'text-gray-700 text-secondary ' : 'text-gray-700 hover:text-primary hover:underline font-semibold block pb-2 text-sm'
                    )}
                         to='/About-us'>About-us
                    </Link>
                  </li>
                  <li>
                    <Link className={classNames(
                      '/Contact' === location.pathname ? 'text-gray-700 text-secondary ' : 'text-gray-700 hover:text-primary hover:underline font-semibold block pb-2 text-sm'
                    )}
                         to='/Contact'>Contact
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-5 lg:mt-0">
                <span className="block uppercase text-gray-600 text-md font-semibold mb-2">
                  Contact
                </span>
                <ul className="list-unstyled">
                  <li>
                    <span className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">
                      Email: <span className=' hover:text-secondary cursor-pointer'>info@loiva.eu​</span>

                  </span>
                  </li>
                  <li>
                    <span className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms">
                          Phone: <span className=' hover:text-secondary cursor-pointer'>+358 40 040 6780</span>

                    </span>
                  </li>
                 
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
             
              <a
                href="https://dev-loiva.netlify.app" target='blank'
                className="text-gray-600 hover:text-gray-900"
              > Copyright © {new Date().getFullYear()}{" "}Syed Sabtain{" "}
             
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
