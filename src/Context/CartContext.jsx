import axios from 'axios';
import React, { createContext } from 'react'
import toast from 'react-hot-toast';



export let CartContext=createContext();

export default function CartContextProvider(props){
    
    let headers={
                token:localStorage.getItem('userToken')
                }
                // console.log(localStorage.getItem('userToken').value)

    function getLoggedUserCart()
    {
       return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
        .then((response)=>
            {console.log(response);
                return response}
    )
        .catch((error)=>
            {
                console.log(error);
                return error
                
            })
    }
     function addProductToCart(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers
        }).then((response)=>
            {console.log(response);
                toast.success(response.data.message.split(' ').slice(0, 3).join(' '),{
                    duration:3000,
                  

                });

                return response;

            }
    )
        .catch((error)=>
            {
                console.log(error);
                toast.error(response.data.message.split(' ').slice(0, 3).join(' '),{
                    duration:3000,
                  

                });
                

                return error;

                
            })
     }

     function updataCartItemCount(productId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count:count
        },{
            headers
        }).then((response)=>
            {
                console.log(response);
                return response;

            }
    )
        .catch((error)=>
            {
                console.log(error);
                return error;

                
            })
     }







    function deleteProductItem(productId)
    {
       return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            headers
        })
        .then((response)=>
            {
                console.log(  response);

               return response
            })
        .catch((error)=>{
            console.log( error);

              return error
           
            
        })
    }

    function clearCart(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:headers
        }).then((response)=>
            {
                console.log(response);
            return response;
        })
        .catch((error)=>
        {
            console.log(error);
            return error
        })
    }





    return <CartContext.Provider value={{deleteProductItem, getLoggedUserCart,addProductToCart,updataCartItemCount,clearCart}}>
        {props.children}

    </CartContext.Provider>
}
