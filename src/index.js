import React from 'react';
import ReactDOM from 'react-dom';

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";

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

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Layout>
                    <Route exact path="/" component={<MenuPage></MenuPage>} />
                    <Route path="/form" component={<FormPage></FormPage>} />
                </Layout>
            </Routes>
        </HashRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);