import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./styles.css";
import RootLayout from "./layout/RootLayout";
import ProjectsLayout from "./layout/ProjectsLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Resume from "./pages/resume";
import NotFound from "./pages/NotFound";
import ProjectsError from "./pages/projects/ProjectsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="projects"
        element={<ProjectsLayout />}
        errorElement={<ProjectsError />}
      >
        <Route index element={<Projects />} />
        <Route path="projectDetails/:id" element={<ProjectDetails />} />
      </Route>
      <Route path="resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
