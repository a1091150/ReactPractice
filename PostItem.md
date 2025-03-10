這是符合你需求的 `PostItem.tsx`，使用 Tailwind CSS 來控制排版，但暫時不考慮顏色與字體大小：  

### `PostItem.tsx`
```tsx
import React from "react";

interface PostProps {
  title: string;
  author: string;
  date: string;
}

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
```

---

### 🎯 **屬性說明**
| 屬性 | Tailwind 類別 | 作用 |
|------|--------------|------|
| `.flex` | `flex` | 讓 `div` 成為 Flex 容器 |
| `.flex-col` | `flex-col` | 讓內部元素垂直排列 |
| `.border-b` | `border-b` | 添加底部邊框，分隔每個文章項目 |
| `.p-2` | `p-2` | 設定內邊距，讓內容與邊界有間距 |
| `.flex justify-between` | `justify-between` | 讓 `title` 兩端對齊 |
| `.text-left` | `text-left` | 讓 `title` 和 `author` 靠左對齊 |
| `.text-right` | `text-right` | 讓 `date` 靠右對齊 |
| `.text-sm` | `text-sm` | 設定 `author` 和 `date` 為較小的字體大小 |

這樣的佈局應該符合你的要求，接下來你可以再調整字體、顏色、間距等細節！🚀