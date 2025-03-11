import React from "react";
import PostItem from "./PostItem";
import { PostListProps } from "../types/postListProps";

const PostList: React.FC<PostListProps> = ({posts}) => {
    const renderPostItems = posts.map ((post, index) => (
        <PostItem key={index} {...post}></PostItem>
    ));

    return (
        <div className="w-full">
        {renderPostItems}
        </div>
    )
};

export default PostList;