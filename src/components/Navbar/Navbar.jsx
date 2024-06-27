import React, { useContext, useEffect, useState } from 'react';
import Style from './Navbar.module.css';
import logo from '../../assets/images/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import Products from '../Products/Products';

// import Link from "next/link";
// import { Navbar } from "flowbite-react";


export default function Navbar() {
  
   
  let navigate=useNavigate();

    const [counter, setCounter] = useState(0);
    useEffect(()=>{
      // getCart()                 
    } , []);

    let {UserLogin,setUserLogin}=useContext(UserContext);
    // let {getLoggedUserCart}=useContext(CartContext);
  //  async function getCart(){
  //     let response= await getLoggedUserCart();
  //     console.log(response.data.data);
  //     setCounter(response.data.data);

  //   }


    function logOut(){
      localStorage.removeItem('userToken');
      setUserLogin(null);
      navigate('/login')

    }


  return <>
  {/* <nav className='bg-gray-100  fixed top-0 left-0 right-0 z-50'>
    <div className="container items-center flex justify-between mx-auto py-4">
    <div className='flex flex-col xl:flex-row text-center '>
        <img src={logo} width={120} alt="fresh cart logo " />
        <ul className='flex flex-col xl:flex-row justify-around m-0 pl-10'>
          {UserLogin!=null?<>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/'}> Home </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/categories'}> Categories </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/brands'}> Brands </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/products'}> Products </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/cart'}> Cart </NavLink></li>

          </>:null}

        </ul>
      </div>

      <ul className='flex flex-col xl:flex-row justify-around m-0 pl-10'>
        {UserLogin===null?<>
        <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/login'}> Login </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium '><NavLink to={'/register'}> Register </NavLink></li>
        </>:<li onClick={logOut} className='text-md mx-4 text-slate-900 font-medium cursor-pointer '><span> Logout </span></li>}


          <li className='text-md mx-4 text-slate-900 font-normal  items-center flex justify-between '>
            <i className='fab fa-facebook mx-2 fa-sm'></i>
            <i className='fab fa-twitter mx-2 fa-sm'></i>
            <i className='fab fa-instagram mx-2 fa-sm'></i>
            <i className='fab fa-tiktok mx-2 fa-sm'></i>
            <i className='fab fa-youtube mx-2 fa-sm'></i>
          </li>
        </ul>
    </div>


  </nav> */}





<nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
  
      <img src={logo} width={120} className="h-8" alt="fresh cart logo " />

    </a>
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse navbar">
    <ul className='flex flex-col xl:flex-row justify-around m-0 pl-10  nav'>
        {UserLogin===null?<>
        <li className='text-md mx-4 text-slate-900 font-medium md:hover:text-green-700 '><NavLink to={'/login'}> Login </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-medium md:hover:text-green-700 '><NavLink to={'/register'}> Register </NavLink></li>
        </>:<li onClick={logOut} className='text-md mx-4 text-slate-900 font-medium cursor-pointer md:hover:text-green-700 '><span> Logout </span></li>}


          <li className='text-md mx-4 text-slate-900 font-normal  items-center flex justify-between nav-icon '>
            <i className='fab fa-facebook mx-2 fa-sm'></i>
            <i className='fab fa-twitter mx-2 fa-sm'></i>
            <i className='fab fa-instagram mx-2 fa-sm'></i>
            <i className='fab fa-tiktok mx-2 fa-sm'></i>
            <i className='fab fa-youtube mx-2 fa-sm'></i>
          </li>
        </ul>
      {/* Dropdown */}
      
      <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-gray-100" id="navbar-language">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" aria-current="page"><NavLink to={'/'}> Home </NavLink></a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/categories'}> Categories </NavLink></a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/brands'}> Brands </NavLink></a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/products'}> Products </NavLink></a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/cart'}> Cart </NavLink></a>
        </li>
      </ul>
    </div>
  </div>
</nav>




  





    







 </>
}
