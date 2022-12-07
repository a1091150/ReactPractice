import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

let menuItemWording = [
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
];


import MenuItem2 from './component/MenuItem2';
import Menu from './component/Menu';

let menuItemArr3 = menuItemWording.map((wording) => <MenuItem2 text={wording} />);
ReactDOM.render(
    <Menu title={"這是標題!"}>{menuItemArr3}</Menu>,
    document.getElementById('root5')
)