import { useState, createContext, useContext } from "react"

export const ProfileContext = createContext(null)

export const useProfile = () => {
    console.log('context change!');
    return useContext(ProfileContext) // reads { user, setUser }
}

const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(null)

    const state = {
        profile,
        setProfile
    }

    return (
        <ProfileContext.Provider value={ state }>
            {children}
        </ProfileContext.Provider>
    )
}
export default ProfileProvider
