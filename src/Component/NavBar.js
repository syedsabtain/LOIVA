

import { Disclosure } from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../images/loiva-logo-rgb.png'
import {useLocation, Link} from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:'white',
    border:"0px"
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    color:'white',
    border:'0px'
  },
}));

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar({className}) {
  const classes = useStyles();
  let navigation = [
    { name: 'Home', path: '/', current: false },
    { name: 'MyDesign', path: '/MyDesign', current: false },
    // { name: 'Customers', href: '#', current: false },
    // { name: 'Solutions', href: '#', current: false },
    { name: 'Partners', path: '/Partners', current: false },
    { name: 'About Us', path: '/About-us', current: false },
    
  ]
  let location = useLocation();
   let [navValue,setNavValue] = useState('France')
  const HandleNavValue =(event)=>{
    setNavValue(event.target.value)
  }

  return (
    <Disclosure as="nav" className={`bg-transparent ${className} `}>
      {({ open }) => (
        
        <>
          <div className=" mx-auto px-2 sm:px-6 md:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-end           h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:block md:block sm:mt-2 md:-2 lg:hidden ">
                
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center  lg:items-stretch lg:justify-between">
                <div className="flex-shrink-0 flex items-center ">
                  <img
                    className="block sm:block md:block lg:hidden h-10 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block  h-10 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:hidden md:hidden lg:block sm:ml-6 md:ml-6 w-auto ">
                  <div className="flex space-x-4 justify-end ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={classNames(
                          item.path === location.pathname ? 'text-white bg-primary' : 'text-white hover:bg-primary hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  <Link to='login' className='NavButton pt-1.5 uppercase h-8 text-sm hover:bg-primary' >Login In</Link>
                  <div className="border-2 h-8 outline-none rounded text-white bg-transparent inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only ">
            Currency
          </label>
          <FormControl className={classes.formControl.concat(' focus:border-4  focus:border-primary')} style={{border:'0px !important'}}>
          <Select
          // labelId="demo-simple-select-helper-label"
          // id="demo-simple-select-helper"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={navValue}
          displayEmpty
          onChange={HandleNavValue}
          color={'primary'}
          className={classes.selectEmpty}

        >
          
          <MenuItem value={"France"} style={{border:'0px'}}>France</MenuItem>
          <MenuItem value={'German'}>German</MenuItem>
          <MenuItem value={'English'}>English</MenuItem>
        </Select>
        </FormControl>
          {/* <select
            id="currency"
            name="currency"
            className=" focus:bg-primary  cursor-pointer hover:bg-primary outline-none text-white bg-transparent focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent   sm:text-sm rounded-md"
          >
            <option className=''>France</option>
            <option className=''>German</option>
            <option className=''>English</option>
          </select> */}
        </div>
        <div className="border-2 h-8 outline-none rounded text-white inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only ">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="focus:bg-primary  hover:bg-primary cursor-pointer outline-none text-white focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent  sm:text-sm rounded-md"
          >
            <option className=''>En</option>
            <option className=''>Fr</option>
            <option className=''>EUR</option>
          </select>
        </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:block md:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={classNames(
                    item.path === location.pathname ? ' text-white bg-primary' : 'text-white hover:bg-primary hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
