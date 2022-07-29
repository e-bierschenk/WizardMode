import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecentScores, getTopScores } from "../../modules/scoreManager";
import "./Sidebar.css"

export const Sidebar = ({ title, displayGameName, topOrRecent }) => {
    const [scores, setScores] = useState([])
    const { id } = useParams();


    useEffect(() => {
        if (topOrRecent == "recent") {
            getRecentScores().then(apiData => setScores(apiData))
        } else if (topOrRecent == "top") {
            getTopScores(id).then(apiData => setScores(apiData.slice(0, 10)))
        }

    }, [])

    return (
        <aside className="sideBar">
            <h3 className="sideTitle"><b>{title}</b></h3>
            <ul>
                {scores.map(score =>
                    <li>
                        <Link className="sideLinks" to={`/scores/${score.id}`}>
                            {`[${score.userProfile.initials}] ${displayGameName ? score.opdbId : ""} - ${score.scoreValue}`}
                        </Link>
                    </li>
                )}
            </ul>
        </aside>
    )
}