import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./Dashboard.css";

export const Dashboard = () => {

    return (
        <>
            <div className="dashContainer">
                <Sidebar title={"RECENT SCORES"} displayGameName={true} topOrRecent={"recent"} />
                <p>user stats here</p>
            </div>
        </>
    )
}