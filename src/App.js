import { useState, createContext } from "react";
import Loginformnew from "./Loginformnew";
import Mystore from "./Mystore";
export const UserContext = createContext();
export default function App() {
  const [user, setUser] = useState();
  const [flag, setFlag] = useState(0);
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag } }>
       
        {flag==0?<Loginformnew/>:<Mystore />}
     
      </UserContext.Provider>
    </>
  );
}
