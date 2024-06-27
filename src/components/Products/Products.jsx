import React, { useContext, useEffect, useState } from 'react';
import Style from './Products.module.css';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {RiseLoader } from "react-spinners";
import axios from 'axios'
import { Card } from "flowbite-react";
import { CartContext } from '../../Context/CartContext';


export default function Products() {
  let {addProductToCart}=useContext(CartContext);
  const [loading, setLoading] = useState(false)
  const [currentProductId, setCurrentProductId] = useState(0)

  async function addProduct(productId){
    setCurrentProductId(productId);
    setLoading(true)
    let response= await addProductToCart(productId);
    console.log(response);
    if(response.data.status=='success'){
      setLoading(false)

      }
      else{
      setLoading(false)

      }
  }
  


  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  let { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ['recentProducts'],
    queryFn: getRecent,
    staleTime: 5000,
    retry: 5,
    retryDelay: 1000,
  });


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
  console.log(isLoading);



  // const [counter, setCounter] = useState(0);
  // useEffect(()=>{

  // } , []);
  return <>
    <div className="row">
            {data?.data.data.map((product) => 
                <div key={product.id} className="w-1/4 pr px-4">

                    
                    <div className="product py-4">
                    <Link to={`/productdetails/${product.id}/${product.category.name}`}>

                        {/* <img className='w-full' src={product.imageCover} alt={product.title}  />
                        <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
                        <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>

                        <div className='flex justify-between items-center'>
                            <span>{product.price} EGP</span>
                            <span>{product.ratingsQuantity} <i className='fas fa-star text-yellow-400'></i></span>

                        </div>

                        <button className='btn'>add to cart</button> */}


                      



    <Card key={product.id}
      className="max-w-sm"
      imgAlt={product.title} 
      imgSrc={product.imageCover} 
    >
      <a href="#" className='px-2'>
      <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
        <h5 className="text-l font-semibold tracking-tight text-gray-800 dark:text-white">
        {product.title.split(' ').slice(0,2).join(' ')}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center px-2">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        {product.ratingsQuantity} 
        </span>
      </div>
      <div className="flex items-center justify-between p-2">
        <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price} EGP
        </span>
    
        <Link onClick={()=>addProduct(product.id)}
          // to={'/cart'}
          className="rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {currentProductId==product.id&&loading?<i className='fas fa-spinner fa-spin'></i>: 'Add to cart'}
        </Link>
      </div>
    </Card>
  
    </Link>



                        
                        
                    </div>
                
                </div>


            )}


        </div>
  </>
}
