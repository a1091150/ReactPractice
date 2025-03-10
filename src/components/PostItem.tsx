import React from "react";

interface PostProps {
    title: string;
    url: string;
    author: string;
    date: string;
    mark?: string;
}

/*
function PostItem({title, url, author, date, mark}: PostProps) {
    return (
        <div></div>
    );
}
*/

const PostItem: React.FC<PostProps> = ({ title, author, date }) => {
    return (
      <div className="flex flex-col border-b p-2">
        {/* 文章標題 */}
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
