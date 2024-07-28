import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "./views/NotFound";
import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard";

export default function RouterUrl() {
    return useRoutes([
        { path: "/*", element: <NotFound /> },
        {
            path: "",
            element: <Navigate to="/dashboard" />,
        },
        {
            path: "/dashboard",
            element: <Layout children={<Dashboard />} />,
        },
        {
            path: "/bridge",
            element: <Layout children={<Dashboard />} />,
        },
        {
            path: "/bridge-admin",
            element: <Layout children={<Dashboard />} />,
        },
    ]);
}
