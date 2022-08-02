import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMachineById } from "../../modules/opdbManager";
import { getRecentScores, getTopScores } from "../../modules/scoreManager";
import "./Sidebar.css"

export const Sidebar = ({ title, displayGameName, topOrRecent }) => {
    const [scores, setScores] = useState([])
    const [machines, setMachines] = useState({})
    const { id } = useParams();


    useEffect(() => {
        if (topOrRecent == "recent") {
            getRecentScores().then(recentScores => {
                let promises = []
                const uniqueIds = new Set(recentScores.map(score => score.opdbId))
                for (const opdbId of uniqueIds) {
                    promises.push(getMachineById(opdbId))
                }
                Promise.all(promises)
                    .then(opdbMachines => { 
                        setScores(recentScores)
                        setMachines(opdbMachines)
                    })
            })
        } else if (topOrRecent == "top") {
            getTopScores(id).then(topScores => setScores(topScores.slice(0, 10)))
        }
    }, [id])

    return (
        <aside className="sideBar">
            <h3 className="sideTitle"><b>{title}</b></h3>
            <ul>
                {scores.map(score =>
                    <li key={score.id}>
                        <Link className="sideLinks" to={`/scores/${score.id}`}>
                            {`[${score.userProfile.initials}] ${displayGameName ? machines.find(machine => machine.opdb_id === score.opdbId).name : ""} - ${score.scoreValue}`}
                        </Link>
                    </li>
                )}
            </ul>
        </aside>
    )
}