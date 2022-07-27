import { getToken } from "./authManager"
const _apiUrl = "/api/Comment"

export const getCommentsByScoreId = (id) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/GetByScoreId/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
        })).then(r => r.json())
}

export const addComment = (comment) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
        })).then(r => r.json())
}

export const editComment = (comment) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/${comment.id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
        }))
}

export const deleteComment = (id) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
        }))
}