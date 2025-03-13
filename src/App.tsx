import React from "react";
import PostList from "./components/PostList"
import posts from "./mockdata/posts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { welcomeLoader } from "./pages/welcome/welcomeLoader";
import { WelComePage } from "./pages/welcome/WelcomePage";
import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element:<WelComePage></WelComePage>,
                loader: welcomeLoader
            },
            {
                path: "/list",
                element: <PostList posts={posts}></PostList>
            }
        ]
    }
]);

const App: React.FC = () => {    
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;