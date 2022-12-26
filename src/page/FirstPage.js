import React from 'react';

const FirstPage = () => {
    const StyleSheet = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FF632E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
    return (
        <>
            <div style={StyleSheet}>
                <h1 style={{ color: "white", fontFamily: "Microsoft JhengHei" }}>我是第一頁</h1>
            </div>
        </>
    )
}

export default FirstPage;