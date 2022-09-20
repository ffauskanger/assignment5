import TranslateForm from "../Component/Translate/TranslateForm";
import { useProfile } from "../Context/ProfileContext";
import withAuth from "../HOC/withAuth";

const TranslatePage = () => {
    // Local handling of translation
    // POST request of translation to API
    const {profile, setProfile} = useProfile()
    return (
        <>
            <TranslateForm profile={profile} setProfile={setProfile}/>
        </>
    );
}

export default withAuth(TranslatePage)