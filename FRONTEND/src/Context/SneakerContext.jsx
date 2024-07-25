import React, { useState, createContext, useContext } from 'react'

 

 

export const UserContext = createContext();

 

 

export function UserProvider(props) {

 

    const [user, setUser] = useState({})

   return(

 

<UserContext.Provider value={{user, setUser}}>

    {props.children}

</UserContext.Provider>

)

}

 

export const useUserContext = () => {

    return useContext(UserContext);

  };