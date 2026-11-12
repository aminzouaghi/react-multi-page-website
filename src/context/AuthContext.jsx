import { useState , createContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }){
    const [user, setUser] = useState(null);


    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider};
export default AuthContext;