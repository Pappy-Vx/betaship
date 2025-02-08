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
        Component: Products,
        path: routePath.PRODUCTS,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Products,
        path: routePath.PRODUCT_DETAILS,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Cart,
        path: routePath.CART,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: About,
        path: routePath.ABOUT,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Contact,
        path: routePath.CONTACT,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Login,
        path: routePath.LOGIN,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Register,
        path: routePath.REGISTER,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Policy,
        path: routePath.POLICY,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Shop,
        path: routePath.SHOP,
        hydrateFallbackElement: <Loader />,
        HydrateFallback: Loader,
    },
    {
        Component: Checkout,
        path: routePath.CHECKOUT,
    },
]);