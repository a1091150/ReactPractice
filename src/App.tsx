import React from "react";
import PostItem from "./components/PostItem";
import posts from "./mockdata/posts";
const App: React.FC = () => {
    return (
        <div className="p-4">
            {
                posts.map((post, index) => (
                    <PostItem key={index} {...post}></PostItem>
                ))
            }
        </div>
    )
};

export default App;