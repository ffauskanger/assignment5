import { createHeaders } from  './index.js'

const apiUrl = process.env.REACT_APP_API_URL

/** Checks if user exists from API */
export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {

            throw new Error("Could not complete request")
        }
        const data = await response.json();
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }
    
}

/** Creates a user and posts to API */
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

/** Checks if user exists, otherwise creates user */
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)

    if (checkError !== null) {
        return [ checkError, null ]
    }

    if (user.length > 0) {
        return [ null, user.pop() ]
    }
    return await createUser(username)

}

