import React, { useEffect, useState } from 'react';
import Style from './BrandDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import {RiseLoader } from "react-spinners";
import axios from 'axios';

export default function BrandDetails() {
  const [isLoading, setIsLoading] = useState(true);
  let { id, category } = useParams();
  const [catrgoryDetails, setCatrgoryDetails] = useState(null);
  const [RelatedCategories, setRelatedCategories] = useState([]);
  function getCategoryDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
      .then(({ data }) => {
        setCatrgoryDetails(data.data);
        setIsLoading(false);


      })
      .catch(() => {
        setIsLoading(false);

      })
  }

  function getRelatedCategories(category) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then(({ data }) => {
        let allCategories = data.data;
        let related = allCategories.filter((product) => product.data.name == category)
        console.log(related);
        setRelatedCategories(related)
      })
      .catch(() => {

      })
  }


  useEffect(() => {
    getCategoryDetails(id);
    getRelatedCategories(category);
  }, [id, category]);


  if (isLoading) {
    return <div className='py-8 w-full flex justify-center items-center h-screen'>
      <RiseLoader
        color="rgb(22 163 74 )"
        height={150}
        margin={5}
        radius={10}
        width={5}
      />
    </div>
  }
  return <>
    <div className='row'>
      <div className="w-1/4 m-6 pr">
        <img className='w-full' src={catrgoryDetails?.image} alt={catrgoryDetails?.name} />
        <h1 className='text-lg font-normal text-center text-gray-500'>{catrgoryDetails?.name}</h1>


      </div>



    </div>


  </>
}
