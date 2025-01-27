import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userExpenses, setUserExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUserExpenses = async () => {
      try {
        const userDocRef = doc(db, "users-expenses", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserExpenses(userDoc.data().expenses);
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      getUserExpenses();
    }
  }, [user]);

  const updateUserExpenses = async (expenses) => {
    setUserExpenses(expenses);
    try {
      const userDocRef = doc(db, "users-expenses", user.uid);
      await setDoc(userDocRef, { expenses });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, loading, userExpenses, updateUserExpenses }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
