import React, { useEffect, useState } from 'react';
import Style from './Notfound.module.css';
import ErrorImage from'../../assets/images/404_error_page_not_found.gif'


export default function Notfound() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>

    <img className='m-auto w-fit my-10' src={ErrorImage} alt='ERROR 404' />
  </>
}
