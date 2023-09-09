import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
// as actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});



export const Userprovider = ({children}) =>{
    debugger
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
   
    useEffect(() =>{
        const unSubscribe = onAuthStateChangedListener((user) =>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unSubscribe;         
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}