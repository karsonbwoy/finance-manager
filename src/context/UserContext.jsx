import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userExpenses, setUserExpenses] = useState([
    // {
    //   id: 1,
    //   category: "Food",
    //   amount: 150,
    //   date: "2025-01-20",
    //   description: "Groceries",
    // },
    // {
    //   id: 2,
    //   category: "Transport",
    //   amount: 50,
    //   date: "2025-01-19",
    //   description: "Fuel",
    // },
    // {
    //   id: 3,
    //   category: "Entertainment",
    //   amount: 200,
    //   date: "2025-01-18",
    //   description: "Concert tickets",
    // },
  ]);

  const userExpensesRef = collection(db, "users-expenses");

  useEffect(() => {
    const getUserExpenses = async () => {
      try {
        const data = await getDocs(userExpensesRef);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserExpenses();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, userExpenses, setUserExpenses }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
