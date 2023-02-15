import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Home from "./pages/front/home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Events from './pages/front/events';
import Gallery from './pages/front/gallery';
import Tour from './pages/sections/tour';
import Tourmain from './pages/front/tour';
import Singlemain from './pages/front/single';
import Team from './pages/front/team';
import TeamSingle from './pages/front/teamSingle';
import About from './pages/front/about';
import Merch from './pages/front/merch';
import Privacy from './pages/front/Privacy';
import Terms from './pages/front/terms';
import Dashboard from './admin/front/dashboard';
import Media from './admin/front/media';
import AdminEvents from './admin/front/events';
import Section3 from './admin/sections/section3';
import Section6 from './admin/sections/section6';
import AdminGallery from './admin/front/gallery';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
     
  },

  {
    path: "*",
    element: <Home />,
     
  },

  {
    path: "/home",
    element: <Home />,
     
  },
  {
    path: "/events",
    element: <Events />,
     
  },
  {
    path: "/gallery",
    element: <Gallery />,
     
  },
  {
    path: "/tour",
    element: <Tourmain />,
     
  },
  {
    path: "/single",
    element: <Singlemain />,
     
  },
  {
    path: "/team",
    element: <Team />,
     
  },
  {
    path: "/team-single",
    element: <TeamSingle />,
     
  },
  {
    path: "/about",
    element: <About />,
     
  },
  {
    path: "/merch",
    element: <Merch />,
     
  },
  {
    path: "/privacy",
    element: <Privacy />,
     
  },
  {
    path: "/terms",
    element: <Terms />,
     
  },

  // Admin Routes
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
     
  },
  {
    path: "/admin/media",
    element: <Media />,
     
  },
  {
    path: "/admin/events",
    element: <AdminEvents />,
     
  },
  {
    path: "/admin/gallery",
    element: <AdminGallery />,
     
  },
  {
    path: "/admin/add-event",
    element: <Section3 />,
     
  },
  {
    path: "/admin/add-gallery",
    element: <Section6 />,
     
  },

  {}
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>
)
