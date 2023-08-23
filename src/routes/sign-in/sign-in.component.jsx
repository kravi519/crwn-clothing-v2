import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.util"

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        console.log(user);
        const userDocRef = createUserDocFromAuth(user);
    }
    return (
        <div>
            <button onClick={logGoogleUser}>SIGN IN</button>
        </div>
    )
}

export default SignIn;