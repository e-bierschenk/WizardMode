import { getToken } from "./authManager"
const _apiUrl = "/api/Opdb"

export const searchOpdb = (query) => {
    try {
        return getToken().then((token) => 
            fetch(`${_apiUrl}/Search/${query}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })).then(r => r.json())
    }
    catch {
        return []
    }
}

export const getMachineById = (id) => {
    return getToken().then((token) => 
            fetch(`${_apiUrl}/GetById/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })).then(r => r.json())
}