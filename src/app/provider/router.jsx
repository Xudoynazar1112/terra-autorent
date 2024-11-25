import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/notFound/NotFound";
import MainWrapper from "../../global/MainWrapper";
import HomePage from "../../pages/home/HomePage";
import CarsPage from "../../pages/CarsPage/CarsPage";
import BrandsPage from "../../pages/brands/BrandsPage";
import ServicePage from "../../pages/services/ServicePage";
import ServiceDetailPage from "../../pages/services/ServiceDetailPgae";
import AboutPage from "../../pages/about/AboutPage";
import ContactPage from "../../pages/contact/ContactPage";
import BlogPage from "../../pages/blog/BlogPage";
import Details from "../../pages/details/Details";


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
          element: <CarsPage/>
        },
        {
          path: "/cars/:id",
          element: <Details />,
        },
        {
          path: "/services",
          element: <ServicePage />,
        },
        {
          path: "/services/detail",
          element: <ServiceDetailPage />,
        },
        {
          path: "/brand",
          element: <BrandsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
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
