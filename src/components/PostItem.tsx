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
        {/* 文章標題與回應數 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* 回應數（固定寬度 w-12，讓數字對齊） */}
            <span className="w-12 text-right">{replies ?? 0}</span>

            {/* 文章標題 */}
            <span className="text-left ml-2">{title}</span>
          </div>
        </div>

        {/* 作者與日期 */}
        <div className="flex justify-between text-sm">
          <span className="text-left ml-14">{author}</span> {/* 確保與 title 左對齊 */}
          <span className="text-right">{date}</span>
        </div>
      </div>
    );
  };

export default PostItem;
