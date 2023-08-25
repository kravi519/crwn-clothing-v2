import { useState } from "react";
import { createAuthUserEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.util";
import './sign-up-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Not match');
            return;
        }

        try {
            const user = createAuthUserEmailAndPassword(email, password);
            console.log(user);
            await createUserDocFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            console.log(err);
            return err;
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span>Sign up with EMail and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label= 'Display Name' type='text' onChange={handleChange} name='displayName' value={displayName} required/>

                <FormInput label= 'Email' type='email' onChange={handleChange} name='email' value={email} required/>

                <FormInput label= 'Password' type='password' onChange={handleChange} name='password' value={password} required/>

                <FormInput label= 'Confirm Password' type='password'onChange={handleChange} name='confirmPassword' value={confirmPassword} required/>
                
                <Button type='submit' >Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;