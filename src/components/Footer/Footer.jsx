import React, { useEffect, useState } from 'react';
import Style from './Footer.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import image from'../../assets/images/Amazon_Pay_logo.svg.png';
import image1 from'../../assets/images/paypal.png';
import image2 from'../../assets/images/american.png';
import image3 from'../../assets/images/mastercard.png';
import image4 from'../../assets/images/app_store.png';
import image5 from'../../assets/images/app_store1.png';

export default function Footer() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {

  }, []);
  return <>
    <div className='bg-gray-200 p-10  mt-28   font-medium  static bottom-0 left-0 right-0 z-50' >

      <h2 className='mb-3'>Get the FreshCart APP</h2>
      <p className='text-gray-500'>We will send you a link, open it on your phone to download the app  </p>
      <div >
        <form className="flex items-start justify-start w-4/5 my-4  ">
          <label for="voice-search" className="sr-only">Search</label>
          <div className="relative  w-full">

            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email..." required />

          </div>
          <button type="submit" className="inline-flex items-center  py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               Share_App_Link
          </button>
        </form>

      </div>

      <div className='flex justify-start items-center'>
        <div className='flex  items-center '>
          <p className=' me-4'>Payment_Partners</p>
          <div className='flex justify-start items-center'>
            <img className='w-[8%] ms-2' src={image} alt='pay'/>
            <img className='w-[8%] ms-2' src={image2} alt='pay'/>
            <img className='w-[8%] ms-2' src={image1} alt='pay'/>
            <img className='w-[8%] ' src={image3} alt='pay'/>
          </div>
        </div>
        <div className='flex items-center '>
          <p className='me-4 '>Get_deliveries_with_freshCart</p>

          <div className='flex justify-start items-center '>
          <img className='w-[100%] me-1 ' src={image4} alt='pay'/>
          <img className='w-[100%] ' src={image5} alt='pay'/>
          {/* <img className='w-[100%] ps-50' src={image5} alt='pay'/> */}




          </div>
        </div>

      </div>



    </div>
  </>
}
