import React, { createContext, useEffect, useState } from 'react';

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);
  
    useEffect(() => {
      // Retrieve the token from localStorage
      const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      setToken(storedToken);
    }, []);
  
    return (
      <TokenContext.Provider value={token}>
        {children}
      </TokenContext.Provider>
    );
  };


// let router = useRouter();
// const storedToken = localStorage.getItem("token");
// if (storedToken !== 'undefined') {
//   token = JSON.parse(storedToken);
// }
// else{
//   router.push("http://master.revel-yax.test:3000");
// }
