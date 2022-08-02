import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./Dashboard.css";
import { UserDetails } from "./UserDetails";

export const Dashboard = () => {

    return (
        <>
            <div className="dashContainer">
                <Sidebar title={"RECENT SCORES"} displayGameName={true} topOrRecent={"recent"} />
                <UserDetails />
            </div>
        </>
    )
}