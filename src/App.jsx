import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { themeContext } from "./contexts/themeContext";
import { pageDetails, notFoundPageDetails } from "./libraries/constants";
import { createElement } from "react";
import { Analytics } from "@vercel/analytics/react"

function Layout() {
  const [theme, setTheme] = useTheme();

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </themeContext.Provider>
  );
}

function App() {
  const navRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        ...Object.keys(pageDetails).map((e) => ({
          path: pageDetails[e].path,
          element: createElement(pageDetails[e].component),
        })),
        {
          path: notFoundPageDetails.path,
          element: createElement(notFoundPageDetails.component),
        },
      ],
    },
  ]);

  return <RouterProvider router={navRouter} />;
}

export default App;
