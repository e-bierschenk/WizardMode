import React, { useState } from "react";
import { deleteComment, editComment } from "../../modules/commentManager";
import "./Comment.css"

export const Comment = ({ comment, currentUser, updateComments }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [commentText, setCommentText] = useState(comment.commentText)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleInput = (event) => {
        event.preventDefault()
        if (event.key === "Enter") {
            const editedComment = {
                id: comment.id,
                commentText: event.target.value
            }
            setIsEditing(false)
            editComment(editedComment).then(() => updateComments())  
        } else {
            setCommentText(event.target.value)
        }
    }

    const handleDelete = () => {
        deleteComment(comment.id).then(() => updateComments())
    }
    return (
        <div className="commentContainer">
            {isEditing ?
                <>
                    <p>[{comment.userProfile.initials}] :  </p><input onKeyUp={handleInput} type="text" defaultValue={`${commentText}`}></input>
                </>
                :
                <p> [{comment.userProfile.initials}] :  {comment.commentText} </p>
            }
            {currentUser.id === comment.userProfileId ?
                isEditing ?
                    ""
                    :
                    <div className="buttonDiv">
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                :
                ""}
        </div>
    )
}

