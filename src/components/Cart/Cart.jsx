import React, { useContext, useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import { RiseLoader } from "react-spinners";



export default function Cart() {

  let { getLoggedUserCart, updataCartItemCount,deleteProductItem,clearCart } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Count, setCount] = useState(null);


  async function getCartItem() {
    let response = await getLoggedUserCart();
    console.log(response.data.data);
    setCartDetails(response.data.data)
 
    setIsLoading(false)

  }
  async function clearCartItem() {
    let response = await clearCart();
    console.log(response.data.data);
    setCartDetails(response.data.data)
 
    setIsLoading(false)

  }

  async function updataCartCount(productId, count) {
    let response = await updataCartItemCount(productId, count);
    console.log(response.data.data);
    setCartDetails(response.data.data)
    // setCount(response.data.data.products[0].count)
    // console.log(Count);
    setIsLoading(false)

  }

  async function deleteCartItem(productId){
    let response= await deleteProductItem(productId);
    console.log(response.data.data);
    setCartDetails(response.data.data)

  }
 
  



  useEffect(() => {
    getCartItem();
    // deleteCartItem();

  }, []);


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



    <h2 className='text-2xl text-green-600 text-center font-semibold my-7'>Shopping Cart</h2>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

          {cartDetails?.products.map((product) =>

            <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.product.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button onClick={() => updataCartCount(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-green-50 focus:ring-4 focus:ring-green-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                  </button>
                  <div>
                    <span>{product.count}</span>
                  </div>
                  <button onClick={() => updataCartCount(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-green-50 focus:ring-4 focus:ring-green-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                <span>{product.price} EGP</span>
              </td>
              <td className="px-6 py-4">
                <span onClick={()=>deleteCartItem(product.product.id)} className=" cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
              </td>
            </tr>


          )}


        </tbody>
      </table>
    </div>
    <h3 className='text-xl text-slate-600 text-end font-semibold me-8 mt-6 '>TotalCartPrice : {cartDetails?.totalCartPrice==null?'0':cartDetails?.totalCartPrice} EGP</h3>
    <div className='flex justify-end items-center my-5 me-20'>
    <button onClick={()=>clearCartItem()} className="inline-flex items-center   py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               Clear_Cart
          </button>

    </div>
  





  </>
}
