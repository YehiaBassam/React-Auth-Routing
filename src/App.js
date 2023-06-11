import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Error from "./Components/Error/Error";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <Error />,
      children: [
        // { index: true, element: <Home /> },
        { path: '/', element: <Home /> },
        { 
          path: 'products',
          element: <Products />,
          // children: [
          //   {
          //     path: 'products/:id',
          //     element: <ProductDetails />
          //   },
          // ]
        },
        {
          path: 'products/:id',
          element: <ProductDetails />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
