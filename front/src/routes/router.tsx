import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router";
import ChatPage from "../pages/chat/ChatPage";
import Layout from "../components/Layout/Layout";
import AccountPage from "../pages/account/AccountPage";

const routes: RouteObject[] = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <ChatPage />,
      },
      {
        path: "register",
        //   element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <Layout />,
    children: [
      {
        index: true,
        //   element: <Home />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
