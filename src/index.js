import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { HashRouter, Route, Routes, Link, Router, BrowserRouter } from "react-router-dom";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";
import FirstPage from './page/FirstPage';
import SecondPage from './page/SecondPage';

const Layout = (props) => {
    return (
        <>
            <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to="/form" style={{ marginLeft: "20px" }}>點我連到第二頁</Link>
            </nav>
            {props.children}
        </>
    )
}

// http://localhost:8080/#
// http://localhost:8080/#/second
const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<FirstPage></FirstPage>}></Route>
                <Route path="/s" element={<SecondPage></SecondPage>}></Route>
                <Route path="/m" element={<MenuPage></MenuPage>}></Route>
                <Route path="/f" element={<FormPage></FormPage>}></Route>
            </Routes>
        </HashRouter >
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );