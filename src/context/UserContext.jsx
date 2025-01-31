import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { getDoc, setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userExpenses, setUserExpenses] = useState([]); //contains also incomes(positive amounts)
  const expenses =
    userExpenses?.reduce((prev, acc) => {
      return acc.amount > 0 ? prev + 0 : prev + acc.amount;
    }, 0) || 0;
  const incomes =
    userExpenses?.reduce((prev, acc) => {
      return acc.amount < 0 ? prev + 0 : prev + acc.amount;
    }, 0) || 0;
  const balance = incomes + expenses || 0;

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
      value={{
        user,
        loading,
        userExpenses,
        updateUserExpenses,
        balance,
        expenses,
        incomes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
