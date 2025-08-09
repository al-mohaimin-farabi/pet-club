import initializeFirebase from "../pages/Auth/FireBase/firebase.init";
import { useState, useEffect } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
  getIdToken,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setIsSuperAdmin] = useState(false);
  const [tempAdmin, setIsTempAdmin] = useState(false);
  const [msg, setMsg] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // const registerUser = (email, password, name, location, navigate) => {
  //   setIsLoading(true);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // console.log(userCredential);
  //       setAuthError("");
  //       const newUser = { email, displayName: name };
  //       setUser(newUser);
  //       // save user to the dataBase
  //       saveUser(email, name, "POST");

  //       // send name to firebase after creation
  //       updateProfile(auth.currentUser, {
  //         displayName: name,
  //       })
  //         .then(() => {
  //           const destination = location?.state?.from || "/";
  //           navigate(destination);
  //         })
  //         .catch((error) => {
  //           setAuthError(error.message);
  //         });
  //     })
  //     .catch((error) => {
  //       setAuthError(error.message);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const registerUser = (email, password, name, notify, location, navigate) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setAuthError("");

        // Wait for the user to be fully created and available in Firebase
        if (user) {
          // Set user info locally for instant UI update
          const newUser = { email, displayName: name, role: null };
          setUser(newUser);

          // Save user to the database
          saveUser(email, name, "POST");

          // Send name to Firebase after creation
          try {
            await updateProfile(user, { displayName: name });
            console.log("User profile updated");

            // Send email verification
            await sendEmailVerification(user);
            notify();
            console.log("Verification email sent");

            // Optionally redirect user after registration (e.g., to home or dashboard)
            const destination = location?.state?.from || "/";
            navigate(destination);
          } catch (error) {
            setAuthError(error.message);
            console.log(
              "Error updating user profile or sending verification:",
              error
            );
          }
        } else {
          throw new Error("User is not available");
        }
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log("Error during registration:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google signin
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // facebook signin
  const signInWithFacebook = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Reset password
  const resetPassword = async (email) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setAuthError("");
        setMsg(
          "Password reset email sent successfully. Please check your inbox. Check the spam folder also"
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMsg("");
        setAuthError(errorMessage);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  // Send email verification

  const sendEmailVerificationToUser = async () => {
    setIsLoading(true);
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser); // Send the verification email
        setAuthError(""); // Clear previous errors
        setMsg(
          "Verification email sent successfully. Please check your inbox & spam folder."
        );
        alert("Verification mail sent");
      } else {
        throw new Error("No user is logged in.");
      }
    } catch (error) {
      setMsg("");
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // observer user state || login-logout state

  // useEffect(() => {
  //   const unsubscribed = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //       getIdToken(user).then((idToken) => {
  //         localStorage.setItem("idToken", idToken);
  //       });
  //     } else {
  //       setUser({});
  //     }
  //     setIsLoading(false);
  //   });
  //   return () => unsubscribed;
  // }, [auth]);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", idToken); // Save token to localStorage
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed(); // Cleanup listener when component unmounts
  }, [auth]);

  // check user is superadmin
  useEffect(() => {
    async function isAdmin() {
      const url = `${process.env.REACT_APP_BACKEND_URL}/users/${user?.email}/roles`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data, "admin data");

          setIsSuperAdmin(data?.superAdmin);
          setIsTempAdmin(data?.tempAdmin);
          console.log(data?.superAdmin, data?.tempAdmin);
        });
    }
    isAdmin();
  }, [user?.email, user?.admin, tempAdmin]);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //  save user to the data base || check user email exsist or not
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
    signInWithGoogle,
    signInWithFacebook,
    resetPassword,
    msg,
    setMsg,
    setAuthError,
    sendEmailVerificationToUser,
    auth,
    signOut,
    tempAdmin,
    setIsTempAdmin,
  };
};

export default useFirebase;
