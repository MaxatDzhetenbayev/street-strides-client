import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { ProductDetail } from "./pages/ProductDetail";
import { CartPage } from "./pages/CartPage/CartPage";

export const App = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/product-detailed/:id",
          element: <ProductDetail />,
        },
        {
          path: "/user-cart",
          element: <CartPage />,
        },
      ],
    },
  ]);
};
