import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";

export const SneakerContext = createContext({});

//Cart Context to persist the cart data in the local storage
export function SneakerContextProvider({ children }) {
    const [sneakersInCart, setSneakersInCart] = useLocalStorageState('cart', { defaultValue: [] });
    return (
      <SneakerContextContext.Provider value={{ sneakerssInCart, setSneakersInCart }}>
        {children}
      </SneakerContextContext.Provider>
    )
  }