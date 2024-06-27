import React, { useEffect, useState } from 'react';
import Style from './ProdectedRoute.module.css';
import { Navigate } from 'react-router-dom';


export default function ProdectedRoute(props) {
    // console.log(props);
    if (localStorage.getItem('userToken') != null) {
        return props.children
    }
    else {
       return <Navigate to={'/login'} />

    }

    const [counter, setCounter] = useState(0);
    useEffect(() => { }, []);
    return <>
        <h1>ProdectedRoute</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eligendi accusantium libero quae sit ex reiciendis eaque voluptatem. Sed architecto, voluptatibus ab nobis praesentium laudantium consequatur assumenda error odio maiores!</p>
    </>
}
