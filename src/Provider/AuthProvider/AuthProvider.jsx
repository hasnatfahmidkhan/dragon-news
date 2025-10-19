import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  // console.log(user);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // profile update
  const profileUpdata = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // observer for user state(log in or not)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      setUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    googleSignIn,
    profileUpdata,
    logOut,
    resetPassword,
    userLoading,
    setUserLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
