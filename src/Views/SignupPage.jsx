import SignupForm from '../Component/Signup/SignupForm';

function SignupPage() {
    // requests for users GET, POST
    // redirect
    // variables & states
    // userState(?)
    

    return (
        <div className="signupContent">
            <div className='signupLeft signupSides'></div>
            <SignupForm />
            <div className='signupRight signupSides'></div>
        </div>
    );
}

export default SignupPage;