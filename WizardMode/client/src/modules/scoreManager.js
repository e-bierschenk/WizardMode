import { getToken } from "./authManager"
const _apiUrl = "/api/Score"

export const getScoreById = (id) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
        })).then(r => r.json())
}

export const getRecentScores = () => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/GetRecent`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
        })).then(r => r.json())
}

export const getTopScores = (opdbId) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}/GetByMachine/${opdbId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
        })).then(r => r.json())
}

export const addScore = (score) => {
    return getToken().then((token) => 
        fetch(`${_apiUrl}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(score)
        })).then(r => r.json()).then(r=> console.log(r))
}