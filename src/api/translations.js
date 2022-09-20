import { createHeaders } from  './index.js'

const apiUrl = process.env.REACT_APP_API_URL

/** (PATCH)es an translation to a user (adding)*/
export const addTranslation = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if (!response.ok) {
            throw new Error('Could not update translation')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

/** (PATCH) translations to an empty array */
export const deleteTranslations = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not update translation')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}