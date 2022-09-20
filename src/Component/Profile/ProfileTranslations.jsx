function ProfileTranslations({translations}) {
    return (
        <>
            <section>
                <h4>Your translations</h4>
                <ul>
                {
                
                translations.map( (item, index) => {
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