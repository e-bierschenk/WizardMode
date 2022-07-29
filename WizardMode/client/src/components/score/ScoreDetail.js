import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getScoreById } from "../../modules/scoreManager"
import { addComment, getCommentsByScoreId } from "../../modules/commentManager"
import { getMachineById } from "../../modules/opdbManager"
import { Comment } from "../comment/Comment"
import { getUserByFirebaseId } from "../../modules/authManager"
import "./ScoreDetail.css"

export const ScoreDetail = () => {
    const [score, setScore] = useState({})
    const [comments, setComments] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [game, setGame] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const [newText, setNewText] = useState("")
    const { id } = useParams()

    const handleAddComment = () => {
        setIsAdding(true)
    }

    const handleCancel = () => {
        setIsAdding(false)
    }

    const handleInput = (event) => {
        setNewText(event.target.value)
    }

    const handleSubmitComment = () => {
        if (newText === "") {
            alert("Please enter a message before submitting")
        } else {
            setIsAdding(false)
            const newComment = {
                commentText: newText,
                scoreId: parseInt(id),
                userProfileId: currentUser.id
            }
            addComment(newComment)
                .then(() => updateComments())
        }
    }

    const updateComments = () => {
        getCommentsByScoreId(id)
            .then((apiComments) => setComments(apiComments))
    }

    useEffect(() => {
        Promise.all([
            getScoreById(id),
            getCommentsByScoreId(id),
            getUserByFirebaseId()
        ]).then((values) => {
            setScore(values[0])
            setComments(values[1])
            setCurrentUser(values[2])
            return values
        }).then((values) => getMachineById(values[0].opdbId)
            .then(r => setGame(r)))
    }, [])

    return (
        <>
            <div className="scoreHeader">
                <h3>{game.name} - [{score.userProfile?.initials}] - {score.scoreValue}</h3>
            </div>
            <div className="commentBlock">
                {comments.length === 0 ?
                    <p>There are no comments on this score, would you like to be the first?</p>
                    :
                    comments.map((comment) =>
                        <Comment
                            key={`comment-${comment.id}`}
                            comment={comment}
                            currentUser={currentUser}
                            updateComments={updateComments} />
                    )
                }
                {isAdding ?
                    <div className="newComment">
                        <input type="text" onInput={handleInput} placeholder="Add comment here..."></input>
                        <div className="iconHolder">
                            <div className="iconContainer">
                                <img className="icon" src="/images/comment-check.svg" onClick={handleSubmitComment} />
                            </div>
                            <div className="iconContainer">
                                <img className="icon" src="/images/cancel.svg" onClick={handleCancel} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="addComment" onClick={handleAddComment}>
                        <p>Add Comment</p>
                    </div>
                }
            </div>
        </>
    )
}