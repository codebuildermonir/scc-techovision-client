import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
      const[user, setUser]= useState(null)
      const[loading, setLoading]=useState(true)

      const createUser=(email , password)=>{
            setLoading(true)
           return createUserWithEmailAndPassword( auth, email, password)
           

      }
      const singIn= (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
      }

      const googleProvider= new GoogleAuthProvider()
      const googleLogin= ()=>{
            setLoading(true);
            return signInWithPopup( auth,googleProvider)

      }


      const logOut =()=>{
            return signOut(auth)
       }
       useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                   setUser(currentUser);
                   setLoading(false);
                   //console.log('this is current user',currentUser)     
             })
             return ()=>{
                   return unSubscribe
             }
       },[])



      const authInfo={
            createUser,
            singIn,
            googleLogin,
            logOut,
            loading,
            user

 
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;