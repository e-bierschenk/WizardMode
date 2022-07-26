import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import { getMachineById } from "../../modules/opdbManager";
import "./Game.css"


export const Game = () => {
    const [game, setGame] = useState(null)
    const [score, setScore] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getMachineById(id).then(d => {
            console.log(d)
            setGame(d)
        })
    }, [])

    const handleClick = () => {
        setIsEditing(true)
    }

    const handleScoreInput = (event) => {
        setScore(event.target.value)
        if(event.key === "Enter")
        {
            if (score <= 0) {
                alert("Please enter a number greater than 0.")
            } else {
                console.log("SUBMIT")
                console.log(score)
                setIsEditing(false)
            }
        }
    }

    return (
        game ?
            <>
                <Sidebar title={"TOP SCORES"} displayGameName={false} topOrRecent={"top"} />
                <div className="gameInfo">
                    <div className="imageDiv"><img src={game.images[0].urls.large}></img></div>
                    <div><h3>{game.name}</h3></div>
                    <p>{game.manufacturer.name} - {game.manufacture_date.split("-")[0]}</p>
                    {isEditing ? 
                    <input type="number" placeholder="Enter Score Here" onKeyUp={handleScoreInput}></input>: <button onClick={handleClick}>UPLOAD SCORE</button>}
                </div>
            </>
            :
            ""
    )
}