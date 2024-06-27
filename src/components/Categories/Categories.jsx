import React, { useEffect, useState } from 'react';
import Style from './Categories.module.css';
import RecentCategories from '../RecentCategories/RecentCategories';


export default function Categories() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
  <RecentCategories/>
  </>
}
