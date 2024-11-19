import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/notfound/NotFound";
import MainWrapper from "../../global/MainWrapper";
import HomePage from "../../pages/home/HomePage";
import CarsPage from "../../pages/cars/CarsPage";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainWrapper />, // MainWrapper wraps all child routes
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/cars",
          element: <CarsPage />,
        },
        // {
        //   path: "/cars/:id",
        //   element: <CarsDetailPage />,
        // },
        // {
        //   path: "/services",
        //   element: <ServicesPage />,
        // },
        // {
        //   path: "/brands",
        //   element: <BrandsPage />,
        // },
        // {
        //   path: "/about",
        //   element: <AboutPage />,
        // },
        // {
        //   path: "/contact",
        //   element: <ContactPage />,
        // },
        // {
        //   path: "/blog",
        //   element: <BlogPage />,
        // },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default router;
