import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProdectedRoute from './components/ProdectedRoute/ProdectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CategoriesDetails from './components/CategoriesDetails/CategoriesDetails';
import  {QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from'@tanstack/react-query-devtools'
import BrandDetails from './components/BrandDetails/BrandDetails';
import CartContextProvider, { CartContext } from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';



let query = new QueryClient();




let router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProdectedRoute><Home /> </ProdectedRoute> },
      { path: 'products', element: <ProdectedRoute><Products /></ProdectedRoute> },
      { path: 'productdetails/:id/:category', element: <ProdectedRoute><ProductDetails /></ProdectedRoute> },
      { path: 'cart', element: <ProdectedRoute><Cart /></ProdectedRoute> },
      { path: 'brands', element: <ProdectedRoute><Brands /></ProdectedRoute> },
      { path: 'branddetails/:id', element: <ProdectedRoute><BrandDetails/></ProdectedRoute> },
      { path: 'categories', element: <ProdectedRoute><Categories /></ProdectedRoute> },
      { path: 'categoriesdetails/:id/:category', element: <ProdectedRoute><CategoriesDetails /></ProdectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return<QueryClientProvider client={query}>
            <UserContextProvider>
              <CounterContextProvider>
                <CartContextProvider>
                <RouterProvider router={router}></RouterProvider>
                <ReactQueryDevtools/>
                <Toaster/>
                </CartContextProvider>
              </CounterContextProvider>
            </UserContextProvider>
  </QueryClientProvider>




}
export default App


