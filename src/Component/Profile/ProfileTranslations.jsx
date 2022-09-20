/** Creates the translations from the user and displays them */
function ProfileTranslations({translations}) {
    return (
        <>
            <section>
                <h4>Your last ten translations</h4>
                {translations.length === 0 && <p>You have no translations</p>}
                <ul>
                {
                // Gets the latest 10 and maps them
                translations.slice(translations.length-10).map( (item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
                </ul>
            </section>
        </>
    );
}

export default ProfileTranslations;