import React from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import posts from "./mockdata/posts";
import { PostListProps } from "./types/postListProps";

const App: React.FC = () => {
    let dd = {
        "title": "[販售] 台北 Apple AirPods Pro 2 USB-C 全新",
        "url": "/bbs/MacShop/M.1741611253.A.696.html",
        "author": "supersp",
        "date": "3/10",
        "mark": "🔥"
    };
    
    const renderPostList =  <PostList posts={[dd]}></PostList>;

    return (
        <div>
            {renderPostList}
        </div>
    )
};

export default App;