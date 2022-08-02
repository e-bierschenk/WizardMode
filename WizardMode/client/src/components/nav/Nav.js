import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../modules/authManager";
import { Searchbar } from "./Searchbar";
import "./Nav.css"

export const Nav = ({ isLoggedIn }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        logout().then(() => navigate("/"))
    }

    return (
        <>
            <nav>
                {isLoggedIn &&
                    <header>
                        <div className="headlineBar">
                            <h1>WIZARD MODE</h1>
                        </div>
                        <div className="linkBar">
                            <div className="innerDiv">
                                <Link className="navLink" to="/">home</Link>
                                {/* <Link className="navLink" to="/">my scores</Link> */}
                            </div>
                            <div className="innerDiv">
                                <Link to="" className="navLink" onClick={handleLogout}>logout</Link>
                            </div>
                        </div>
                        <Searchbar />
                    </header>
                }
            </nav>
        </>

    )
}