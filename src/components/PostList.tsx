import React from "react";
import PostItem from "./PostItem";
import { PostListProps } from "../types/postListProps";

const PostList: React.FC<PostListProps> = ({posts}) => {
    const renderPostItems = posts.map ((post, index) => (
        <PostItem key={index} {...post}></PostItem>
    ));

    return (
        <div className="w-full">
        <div className="grid grid-cols-4 font-bold border-b p-2">
          <span className="text-left">標題</span>
          <span className="text-left">作者</span>
          <span className="text-right">日期</span>
          <span className="text-center">標記</span>
        </div>
        
        {renderPostItems}
        </div>
    )
};

export default PostList;