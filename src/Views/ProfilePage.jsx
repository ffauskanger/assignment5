import ProfileHeader from "../Component/Profile/ProfileHeader";
import ProfileActions from "../Component/Profile/ProfileActions";
import ProfileTranslations from "../Component/Profile/ProfileTranslations";
import { useProfile } from "../Context/ProfileContext";
import withAuth from "../HOC/withAuth";

const ProfilePage = () => {
    const {profile, setProfile} = useProfile()
    return (
        <>
            <ProfileHeader username={profile.username}></ProfileHeader>
            <ProfileActions profile={profile} setProfile={setProfile}></ProfileActions>
            <ProfileTranslations translations={profile.translations}></ProfileTranslations>
        </>
    );
}

export default withAuth(ProfilePage)