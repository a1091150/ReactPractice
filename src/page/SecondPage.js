import React from 'react';

const SecondPage = () => {
    const StyleSheet = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FF2E63",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
    return (
        <div style={StyleSheet}>
            <h1 style={{ color: "white", fontFamily: "Microsoft JhengHei" }}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;