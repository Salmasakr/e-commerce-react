import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductDetails.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import { RiseLoader } from "react-spinners";
import { Card } from "flowbite-react";
import { CartContext } from '../../Context/CartContext';




export default function ProductDetails() {
  let{addProductToCart}=useContext(CartContext);
  let navigate = useNavigate();

  let { id, category } = useParams();
  const [prodectDetails, setProdectDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false)
  const [currentProductId, setCurrentProductId] = useState(0)
  function getProdectDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setIsLoading(false);
        setProdectDetails(data.data);


      })
      .catch(() => {
        setIsLoading(false);
        navigate('/*')



      })
  }

  function getRelatedProducts(category) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        let related = allProducts.filter((product) => product.category.name == category)
        console.log(related);
        setRelatedProducts(related)


      })
      .catch(() => {
        navigate('/*')




      })
  }
  async function addProduct(productId){
    setLoading(true);
    setCurrentProductId(productId);
    let response= await addProductToCart(productId);
    console.log(response);
    if(response.data.status=='success'){
      setLoading(false)

      }
      else{
      setLoading(false)

      }
  }


  useEffect(() => {
    getProdectDetails(id);
    getRelatedProducts(category);
  }, [id, category]);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

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
      <div className="w-1/3 mx-10  related">


        <Slider {...settings}>
          {prodectDetails?.images.map((src) => <img className='w-full ' src={src} alt={prodectDetails?.title} />)}
        </Slider>


      </div>
      <div className="w-2/4   m-auto ">
        <h1 className='text-lg font-medium text-gray-950'>{prodectDetails?.title}</h1>
        <p className='text-gray-600 mt-4 font-light'>{prodectDetails?.description}</p>


        <div className='flex justify-between font-medium items-center my-6'>
          <span>{prodectDetails?.price} EGP</span>
          <span>{prodectDetails?.ratingsQuantity} <i className='fas fa-star text-yellow-400'></i></span>

        </div>

        <button onClick={()=>addProduct(prodectDetails.id)} className='btn mt-5 '>
          {currentProductId==prodectDetails.id&&loading?<i className='fas fa-spinner fa-spin'></i>: 'Add to cart'}
          </button>

      </div>
    </div>

    <div className="row">

      {relatedProducts.map((product) => <div key={product.id} className="w-1/4 pr">
        <div className="product py-4 px-4">
          <Link to={`/productdetails/${product.id}/${product.category.name}`}>


          <Card
              className="max-w-sm"
              imgAlt={product.title}
              imgSrc={product.imageCover}
            >
              <a href="#" className='px-2'>
                <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
                <h5 className="text-l font-semibold tracking-tight text-gray-800 dark:text-white">
                  {product.title.split(' ').slice(0, 2).join(' ')}
                </h5>
              </a>
              <div className="mb-5 mt-2.5 flex items-center px-2 ">
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
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  {product.ratingsQuantity}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 ">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price} EGP
                </span>

                <Link 
                onClick={()=>addProduct(product.id)}
              
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
