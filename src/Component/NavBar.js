

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
    
    
  },
}));

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar({className}) {
  const classes = useStyles();
  let navigation = [
    { name: 'Home', path: '/', current: false },
    // { name: 'MyDesign', path: '/MyDesign', current: false },
    // { name: 'Customers', href: '#', current: false },
    // { name: 'Solutions', href: '#', current: false },
    { name: 'Services', path: '/Services', current: false },
    { name: 'About Us', path: '/About-us', current: false },
    { name: 'Contact', path: '/Contact', current: false },

    
  ]
  let location = useLocation();
  //  let [navValue,setNavValue] = useState('France')
   let [navValue2,setNavValue2] = useState('En')

  const HandleNavValue =(event,option)=>{
    if(option === 1 ){
      // setNavValue(event.target.value)
    }
    else{
      setNavValue2(event.target.value)
    }
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
                          item.path === location.pathname ? 'text-white bg-primary border-b-2 border-secondary' : 'text-white border-b-2  hover:bg-primary hover:border-4 hover:border-secondary hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        // style={{borderWidth:'2px'}}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
           
        <div className="border h-8 mt-1 outline-none rounded text-white inset-y-0 right-0 flex items-center">
         
          <FormControl className={classes.formControl.concat(' bg-transparent')} style={{border:'0px !important'}}>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // labelId="demo-simple-select-outline  d-label"
          // id="demo-simple-select-outlined"
          
          value={navValue2}
          displayEmpty
          onChange={(e)=>{
            HandleNavValue(e,2)
          }}
          color={'primary'}
          className={classes.selectEmpty}

        >
          
          <MenuItem value={"En"}>En</MenuItem>
          <MenuItem value={'Fr'}>Fr</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
        </Select>
        </FormControl>
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
