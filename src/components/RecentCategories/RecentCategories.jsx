import React, { useEffect, useState } from 'react';
import Style from './RecentCategories.module.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { RiseLoader } from "react-spinners";
import { Card } from "flowbite-react";


export default function RecentCategories() {
    const [isLoading, setIsLoading] = useState(true);
    const [RecentCategories, setRecentCategories] = useState([]);
    let navigate = useNavigate();

    function getRecentCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then(({ data }) => {
                setIsLoading(false);
                setRecentCategories(data.data);

            })
            .catch((error) => {
                setIsLoading(false);
                navigate('/*')


            })

    }

    console.log(RecentCategories)

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        getRecentCategories();
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
        <div className="row  ">
            {RecentCategories.map((categories) =>
                <div key={categories.id} className="pr w-1/4 px-4">


                    <div className="categories py-4 ">
                        <Link to={`/categoriesdetails/${categories._id}/${categories.name}`}>

                            {/* <img className='w-full' src={categories.image} alt={categories.title} />
                            <span className='block font-medium text-center mt-2 text-gray-600'>{categories.name}</span> */}
                            {/* <h3 className='text-lg font-normal text-gray-800 mb-4'>{categories.title.split(' ').slice(0,2).join(' ')}</h3> */}

                            {/* <div className='flex justify-between items-center'>
                            <span>{categories.slug} </span>
                            <span> <i className='fas fa-star text-yellow-400'></i></span>

                        </div> */}

<Card
      className="max-w-sm pb-2"
      imgAlt={categories.title} 
      imgSrc={categories.image}
    >
      <h5 className="text-xl text-center font-bold tracking-tight text-gray-800 dark:text-white">
      {categories.name}
      </h5>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p> */}
      <button className='btn'> See More</button>
    </Card>

                          




                        </Link>
                    </div>





                </div>


            )}


        </div>



    </>
}
