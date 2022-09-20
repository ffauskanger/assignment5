import TranslateForm from "../Component/Translate/TranslateForm";
import { useProfile } from "../Context/ProfileContext";
import withAuth from "../HOC/withAuth";

const TranslatePage = () => {
    const {profile, setProfile} = useProfile()
    return (
        <>
            <TranslateForm profile={profile} setProfile={setProfile}/>
        </>
    );
}

export default withAuth(TranslatePage)