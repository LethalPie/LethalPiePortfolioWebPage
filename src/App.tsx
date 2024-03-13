import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Project from "./pages/Project.tsx";

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "project", element: <Projects /> },
        { path: "project/:id", element: <Project /> },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children.map((child) => (
              <Route
                key={child.index ? "index" : child.path}
                path={child.index ? "" : child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
