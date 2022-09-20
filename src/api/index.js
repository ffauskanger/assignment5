const apiKey = process.env.REACT_APP_API_KEY

/** Headers with API key and content type */
export const createHeaders = () => {
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey,
    }
}