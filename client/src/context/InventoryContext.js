import { useState, createContext } from 'react'

const InventoryContext = createContext()

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([])

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContext
