import React, { useEffect, useState } from 'react';
import Style from './Brands.module.css';
import RecentBrand from '../RecentBrand/RecentBrand';


export default function Brands() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
    <RecentBrand/>
  </>
}
