import { createBrowserRouter } from "react-router";
import Root from "../../pages/Rootes/Root";
import Eror from "../../pages/Eror/Eror";
import Home from "../../pages/Home/Home";

import Installation from "../../pages/Installation/Installation";
import Apppage from "../../pages/Apppage/Apppage";

import Productdetails from "../../components/Productdetails/Productdetails";
import Notfound from "../../pages/Notfound/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Eror></Eror>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/app",
        element: <Apppage />,
      },
      {
        path: "/install",
        element: <Installation></Installation>,
      },
      {
        path: "/app/:id",
        element: <Productdetails></Productdetails>,
      },
      {
        path: "/app/:/*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);
