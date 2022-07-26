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
                        <div>
                            <h1>WIZARD MODE</h1>
                        </div>
                        <div>
                            <div>
                                <Link to="/">home</Link>
                                <Link to="/">my scores</Link>
                            </div>
                            <div>
                                <a href="" onClick={handleLogout}>logout</a>
                            </div>
                        </div>
                        <Searchbar />
                    </header>
                }
            </nav>
        </>

    )
}