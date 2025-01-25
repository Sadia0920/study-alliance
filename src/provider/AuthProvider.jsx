import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const axiosPublic = useAxiosPublic()

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

    // // SignIn With Github
    // const signInWithGithub = () => {
    //     return signInWithPopup(auth,githubProvider)
    // }

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
            if(currentUser){
              const userInfo = {email: currentUser.email};
              axiosPublic.post('/jwt', userInfo)
              .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token);
                }
              })
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[axiosPublic])

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