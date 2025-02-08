import { createBrowserRouter } from "react-router-dom";
import { routePath } from "../utils/routePath";
import {Home, Products, Cart, About, Checkout, Policy, Login, Register, Contact, Shop} from "./routeImport";
import Loader from "../features/Loader";

export const router = createBrowserRouter([
    {
        Component: Home,
        path: routePath.HOME,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
      },
      {
        Component: Register,
        path: routePath.REGISTER,
        // LOOK HERE FOR SUB ROUTES
        // children: [
        //   {
        //     index: true,
        //     Component: RegisterPageLayout,
        //     path: routePath.REGISTERPAGELAYOUT,
        //   },
        //   {
        //     Component: Validate,
        //     path: routePath.VALIDATE,
        //   },
        // ],
      },
      {
        Component: About,
        path: routePath.ABOUT,
      },
      {
        Component: Contact,
        path: routePath.CONTACT,
    }
        ,{
        Component: Login,
        path: routePath.LOGIN,
        },
        {
        Component: Shop,
        path: routePath.SHOP,
        },
        {
        Component: Products,
        path: routePath.PRODUCTS,
        },
        {
        Component: Cart,
        path: routePath.CART,
        },
        {
        Component: Checkout,
        path: routePath.CHECKOUT,
        },
        {
        Component: Policy,
        path: routePath.POLICY,
        },
    ])