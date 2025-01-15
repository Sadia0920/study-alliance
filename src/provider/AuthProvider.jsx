import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
// import axios from "axios";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Create User
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // SignIn User
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // SignIn With Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }

    // SignOut User
    const signOutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    // update user info
  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser,profile)
  }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
                setUser(currentUser)
                // console.log('stateCapture:', currentUser?.email)
                // if(currentUser?.email){
                //     const user = {email: currentUser.email}
                //     axios.post('https://volun-force-server.vercel.app/jwt', user, {withCredentials: true})
                //     .then(res => {
                //         // console.log("login token",res.data);
                //         setLoading(false)
                //      })
                // }
                // else{
                //     axios.post('https://volun-force-server.vercel.app/logout', {}, {withCredentials: true})
                //     .then(res => {
                //         // console.log('logout',res.data);
                //         setLoading(false)
                //     })
                // }
                
            return () => {
                unSubscribe();
            }
        })
    },[])

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserInfo,
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}