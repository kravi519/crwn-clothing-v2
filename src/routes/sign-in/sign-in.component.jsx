import { 
    signInWithGooglePopup, 
    createUserDocFromAuth, 
 } from "../../utils/firebase/firebase.util"

 import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
const SignIn = () => {

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        console.log(user);
        const userDocRef = createUserDocFromAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>SIGN IN</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;