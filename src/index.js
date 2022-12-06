import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const menuFactory = () => {
    return (
        <div>
            <div>Hello World!</div>
            <button>I am Groot</button>
        </div>)
};

const menuFactory2 = () => {
    return (
        <Fragment>
            <div>Hello World!</div>
            <button>I am Groot</button>
        </Fragment>
    )
};

const menuFactory3 = () => {
    return (
        <>
            <div>Hello World!</div>
            <button>I am Groot</button>
            <div> {1 + 1 + 1 + "123"}</div>
        </>
    )
};
ReactDOM.render(menuFactory3(), document.getElementById('root'));

const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

const menuFactory4 = () => {
    if (false)
        return (
            <ul className='menu'>
                <li className='menu-item' style={menuItemStyle}>Like 的發問</li>
            </ul>
        )
    else
        return (
            <ul className='menu'>
                <li className='menu-item' style={menuItemStyle}>Like 的發問</li>
            </ul>
        )
}

ReactDOM.render(menuFactory4(), document.getElementById('root2'));


let menuItemWording = [
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
];

let menuItemArr = menuItemWording.map(
    (wording) => <li className="menu-item"> {wording}</li>
);

ReactDOM.render(
    <ul className="menu">{menuItemArr}</ul>,
    document.getElementById('root3')
);