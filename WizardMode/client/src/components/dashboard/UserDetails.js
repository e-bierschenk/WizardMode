import React, { useEffect, useState } from "react"
import { getUserByFirebaseId } from "../../modules/authManager"
import { StatBlock } from "./StatBlock"
import { BigBlock } from "./BigBlock"
import "./UserDetails.css"

export const UserDetails = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getUserByFirebaseId().then(user => setCurrentUser(user))
    }, [])

    return (
        <div className="userDetails">
            <h2 className="userHeadline">Welcome [{currentUser.initials}]</h2>
            <div className="statsContainer">
                {currentUser.id === null ?
                    ""
                    :
                    <>
                        <div className="littleBlock">
                            <StatBlock title={"HIGH SCORES ENTERED"} statFunc={"highScoresEntered"} />
                            <StatBlock title={"MACHINES PLAYED"} statFunc={"machinesPlayed"} />
                            <StatBlock title={"DAYS SINCE LAST SCORE"} statFunc={"daysSinceScore"} />

                        </div>
                        <BigBlock />
                    </>
                }
            </div>
        </div>
    )
}