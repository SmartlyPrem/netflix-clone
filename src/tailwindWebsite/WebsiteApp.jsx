import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Company from './pages/Company';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './Main';

const WebsiteApp = () => {
    const routes = createBrowserRouter(
        [
            {
                path: '/',
                element: <Main />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: 'company',
                        element: <Company />
                    },
                    {
                        path: 'resources',
                        element: <Resources />
                    },
                    {
                        path: 'about',
                        element: <About />
                    },
                    {
                        path: 'contact',
                        element: <Contact />
                    }
                ]
            }
        ]
    )

    // const routes = createBrowserRouter(
    //     [
    //         {
    //             path : '/',
    //             element: <Home/>
    //         },
    //         {
    //             path : '/company',
    //             element: <Company/>
    //         },
    //         {
    //             path : '/resources',
    //             element: <Resources/>
    //         },
    //         {
    //             path : '/about',
    //             element: <About/>
    //         },
    //         {
    //             path : '/contact',
    //             element: <Contact/>
    //         },
    //     ]
    // )

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}

export default WebsiteApp;
