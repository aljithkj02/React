import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { MyContextProvider } from './context';
// import ProductDetails from './components/ProductDetails';

const ProductDetails = lazy(() => import('./components/ProductDetails'));

const Layout = () => {
    return (
        <MyContextProvider>
            <div>
                <Header />
                <div className='pt-20 bg-purple-100'>
                    <div className='w-[90%] mx-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </MyContextProvider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/product/:prodId',
                element: <Suspense fallback={<h1 style={{ paddingTop: "200px"}}>Loading...</h1>}> <ProductDetails /> </Suspense>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)