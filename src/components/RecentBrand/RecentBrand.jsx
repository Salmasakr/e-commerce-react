import React, { useEffect, useState } from 'react';
import Style from './RecentBrand.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RiseLoader } from "react-spinners";
import { Card } from "flowbite-react";




export default function RecentBrand() {
  let navigate = useNavigate();

  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  let { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ['recentbrand'],
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
  if (isError) {
    navigate('/*')
  }



  // const [counter, setCounter] = useState(0);
  // useEffect(()=>{

  // } , []);
  return <>
    <div className="row">
      {data?.data.data.map((brand) =>
        <div key={brand.id} className="w-1/4 pr px-4 cursor-pointer">


          <div className="brand product py-4">
            <Link to={`/branddetails/${brand._id}`}>





              <Card
                className="max-w-sm p-2"
                imgAlt={brand.name}
                imgSrc={brand.image}
              >
                <h5 className="text-xl text-center font-bold tracking-tight text-gray-800 dark:text-white">
                  {brand.name.split(' ').slice(0, 2).join(' ')}
                </h5>

                <Link to={`/branddetails/${brand._id}`}  >
                  <button className='btn'> See More</button>

                </Link>
              </Card>

            </Link>
          </div>

        </div>


      )}


    </div>

  </>
}
