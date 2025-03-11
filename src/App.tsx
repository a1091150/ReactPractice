import React from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import posts from "./mockdata/posts";
import { PostListProps } from "./types/postListProps";

const App: React.FC = () => {    
    const renderPostList =  <PostList posts={posts}></PostList>;

    return (
        <div>
            {renderPostList}
        </div>
    )
};

export default App;