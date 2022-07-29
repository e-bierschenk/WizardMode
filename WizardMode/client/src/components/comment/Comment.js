import React, { useState } from "react";
import { deleteComment, editComment } from "../../modules/commentManager";
import "./Comment.css"

export const Comment = ({ comment, currentUser, updateComments }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [commentText, setCommentText] = useState(comment.commentText)

    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleCancel = () => {
        setIsEditing(false)
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
                    <p>[{comment.userProfile.initials}] :  </p><input className="commentInput" onKeyUp={handleInput} type="text" defaultValue={`${commentText}`}></input>
                    <div className="iconContainer">
                        <img className="icon" src="/images/cancel.svg" onClick={handleCancel} />
                    </div>
                </>
                :
                <p> [{comment.userProfile.initials}] :  {comment.commentText} </p>
            }
            {currentUser.id === comment.userProfileId ?
                isEditing ?
                    ""
                    :
                    <div className="buttonDiv">
                        <div className="iconContainer">
                            <img className="icon" src="/images/edit.svg" onClick={handleEdit} />
                        </div>
                        <div className="iconContainer">
                            <img className="icon" src="/images/trash.svg" onClick={handleDelete} />
                        </div>
                    </div>
                :
                ""}
        </div>
    )
}

