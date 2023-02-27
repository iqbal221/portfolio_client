import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProjectsDetails from "../../Pages/Home/Projects/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectsDetails></ProjectsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://my-portfolio-server-iqbal221.vercel.app/projectsDetails/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
