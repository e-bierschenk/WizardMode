import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { getMachineById } from "../../modules/opdbManager";
import "./Game.css"
import { addScore } from "../../modules/scoreManager";
import { getUserByFirebaseId } from "../../modules/authManager";


export const Game = () => {
    const [game, setGame] = useState(null)
    const [score, setScore] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getMachineById(id).then(d => setGame(d))
    }, [])

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleClick = () => {
        if(!isEditing) {
            setIsEditing(true)
        }
    }


    const handleScoreInput = (event) => {
        setScore(event.target.value)
        if (event.key === "Enter") {
            if (score <= 0) {
                alert("Please enter a number greater than 0.")
            } else {

                getUserByFirebaseId().then(userData => {
                    const scoreToUpload = {
                        scoreValue: score,
                        userProfileId: userData.id,
                        opdbId: id
                    }
                    addScore(scoreToUpload)
                    setIsEditing(false)
                })
            }
        }
    }

    return (
        game ?
            <>
                <div className="gameContainer">
                    <Sidebar title={"TOP SCORES"} displayGameName={false} topOrRecent={"top"} />
                    <div className="gameDetailContainer">
                        <div className="gameInfo">
                            <div className="imageDiv"><img src={game.images[0].urls.large}></img></div>
                            <div className="gameTextContainer">
                                <div><h3>{game.name}</h3></div>
                                <p>{game.manufacturer.name} - {game.manufacture_date.split("-")[0]}</p>
                            </div>
                        </div>
                        <div className="buttonContainer" onClick={handleClick} >
                            {isEditing ?
                                <>
                                    <input className="scoreInput" type="number" placeholder="Enter Score Here" onKeyUp={handleScoreInput}></input> <div className="iconContainer">
                                        <img className="icon" src="/images/cancel.svg" onClick={handleCancel} />
                                    </div>
                                </>
                                : <p className="addScore">UPLOAD SCORE</p>}
                        </div>
                    </div>
                </div>
            </>
            :
            ""
    )
}