import React, { useEffect, useState } from "react";
import { getUserByFirebaseId } from "../../modules/authManager";
import { getScoresByUserId } from "../../modules/scoreManager";
import "./StatBlock.css"

export const StatBlock = ({ title, statFunc }) => {
    const [statNum, setStatNum] = useState(0);

    useEffect(() => {
        if (statFunc === "highScoresEntered") {
            getUserByFirebaseId()
                .then(user => getScoresByUserId(user.id)
                    .then(scores => setStatNum(scores.length)))
        } else if (statFunc === "machinesPlayed") {
            getUserByFirebaseId()
                .then(user => getScoresByUserId(user.id)
                    .then(scores => {
                        const uniques = new Set(scores.map(score => score.opdbId))
                        setStatNum(uniques.size)
                    }))
        } else if (statFunc === "daysSinceScore") {
            getUserByFirebaseId()
                .then(user => getScoresByUserId(user.id)
                    .then(scores => {
                        //gets the number of days between today and the last uploaded score
                        const today = new Date()
                        setStatNum(Math.floor((today - Date.parse(scores[scores.length - 1].dateCreated)) / (1000 * 3600 * 24)))
                    }))
        }
    }, [])

    return (
        <div className="statBlock">
            <p className="statTitle">{title}</p>
            <p className="statNum">{statNum}</p>
        </div>
    )
}