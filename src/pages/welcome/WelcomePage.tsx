import React from "react";
import { useLoaderData } from "react-router-dom";
import { WelcomeLoaderResult } from "./welcomeLoader";
export function WelComePage() {
    const {information} = useLoaderData() as WelcomeLoaderResult;

    if (information.length != 1) {
        return (
            <div></div>
        )
    }

    const firstInformation = information[0];
    return (
        <div key={firstInformation.id}>
            <img src={firstInformation.imageUrl}></img>
            <a>{firstInformation.numberofVisitors}</a>
        </div>
    );
}