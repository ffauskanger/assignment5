function ProfileTranslations({translations}) {
    return (
        <>
            <section>
                <h4>Your last ten translations</h4>
                <ul>
                {
                
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