import { createContext, useContext, useState } from "react";

export const MyContext = createContext({
    user: "No User"
})

export const MyContextProvider = (({ children }) => {
    const [user, setUser] = useState('User');

    const handleChange = (e) => {
        setUser(e.target.value);
    }

    return (
        <MyContext.Provider value={{
            user,
            handleChange
        }}>
            {children}
        </MyContext.Provider>
    )
})

export const useMyContext = () => {
    const data = useContext(MyContext);
    return data;
}