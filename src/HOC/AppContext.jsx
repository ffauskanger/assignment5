import ProfileProvider from "./ProfileContext"

const AppContext = ({ children }) => {
    return (
        <ProfileProvider>
            { children }
        </ProfileProvider>
    )
}

export default AppContext