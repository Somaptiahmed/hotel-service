import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Create Context
export const AuthContext = createContext();

// Initialize Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  /**
   * Create a New User
   * @param {string} email
   * @param {string} password
   * @returns {Promise}
   */
  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Login an Existing User
   * @param {string} email
   * @param {string} password
   * @returns {Promise}
   */
  const userLogin = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null); 
    } finally {
      setLoading(false);
    }
  };

  /**
   * Login with Google
   * @returns {Promise}
   */
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  /**
   * Monitor User State
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  /**
   * Authentication Context Value
   */
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
    googleLogin,
    loading,
  };

  /**
   * Render Children Wrapped in Provider
   */
  return (
    <AuthContext.Provider value={authInfo}>
      {!loading ? children : <div><span className="loading loading-infinity loading-lg"></span></div>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



