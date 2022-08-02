import React, { useEffect, useState } from "react"
import { getUserByFirebaseId } from "../../modules/authManager"
import { getMachineById } from "../../modules/opdbManager"
import { getScoresByUserId } from "../../modules/scoreManager"

import "./BigBlock.css"

export const BigBlock = () => {
    const [gameName, setGameName] = useState("Please enter some high scores")

    useEffect(() => {
        getUserByFirebaseId()
            .then(user => getScoresByUserId(user.id))
            .then(scores => {
                let gameTally = {}
                for (const score of scores)
                {   
                    if (gameTally[score.opdbId] >= 1)
                    {
                        gameTally[score.opdbId] += 1
                    } else {
                        gameTally[score.opdbId] = 1
                    }
                }
                let maxKey = ""
                let maxVal = 0
                for (const [key, value] of Object.entries(gameTally)) {
                    if (value > maxVal){
                        maxKey = key
                        maxVal = value
                    }                
                  }
                if (maxKey !== "")
                {
                    getMachineById(maxKey)
                        .then(machine => setGameName(machine.name))
                }
            })
    }, [])
    return (
        <>
            <div className="bigBlock">
                <p className="bigBlockTitle">FAVORITE GAME</p>
                <p className="bigBlockText">{gameName}</p>
            </div>
        </>
    )
}