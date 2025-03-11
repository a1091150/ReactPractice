import React from "react";
import { PostItemProps } from "../types/postItemProps";

/*
function PostItem({title, url, author, date, mark}: PostProps) {
    return (
        <div></div>
    );
}
*/

const PostItem: React.FC<PostItemProps> = ({ title, author, date, replies }) => {
    return (
      <div className="flex flex-col border-b p-2">
        {/* 文章標題 */}
        <span className="text-left w-10">{replies ?? 0}</span>
        <div className="flex justify-between">
          <span className="text-left">{title}</span>
        </div>
  
        {/* 作者與日期 */}
        <div className="flex justify-between text-sm">
          <span className="text-left">{author}</span>
          <span className="text-right">{date}</span>
        </div>
      </div>
    );
  };

export default PostItem;
