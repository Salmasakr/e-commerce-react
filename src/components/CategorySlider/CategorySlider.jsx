import React, { useEffect, useState } from 'react';
import Style from './CategorySlider.module.css';
import Slider from "react-slick";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function CategorySlider() {

  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();


  function getCategories() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then(({ data }) => {
        setCategories(data.data);

      })
      .catch((error) => {
        navigate('/*')


      })

  }



    const [counter, setCounter] = useState(0);
    useEffect(()=>{

      getCategories();

    } , []);

    var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 8,
      slidesToScroll: 3,
      autoplay:true,
    };
    console.log(categories);


  return <>


<div className='py-5'>
  <h2 className='py-4 text-gray-800 font-semibold text-xl'>Shop Popular Categories </h2>
<Slider {...settings}>
      {categories.map((category)=> <div>
       <Link to={'/categories'}> <img  className='category-img w-full' src={category.image}  alt={category.name}/> </Link> 
        <h3 className='font-medium mt-2'>{category.name}</h3>

      </div>)}

    </Slider>
</div>


  </>
}
