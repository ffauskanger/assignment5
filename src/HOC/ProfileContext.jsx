import { useState, createContext } from "react"

export const ProfileContext = createContext(null)

const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(null)

    return (
        <ProfileContext.Provider value={[profile, setProfile]}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
