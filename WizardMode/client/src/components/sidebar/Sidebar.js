import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecentScores, getTopScores } from "../../modules/scoreManager";

export const Sidebar = ({title, displayGameName, topOrRecent}) => {
    const [scores, setScores] = useState([])
    const { id } = useParams();
    

    useEffect(() => {
        if (topOrRecent == "recent") {
            getRecentScores().then(apiData => setScores(apiData))
        } else if (topOrRecent == "top") {
            getTopScores(id).then(apiData => setScores(apiData))
        }

    }, [])

    return (
        <aside>
            <h3>{title}</h3>
            <ul>
                {scores.map(score =>
                    <li>{`[${score.userProfile.initials}] ${displayGameName ? score.opdbId : ""} - ${score.scoreValue}`}</li>
                )}
            </ul>
        </aside>
    )
}