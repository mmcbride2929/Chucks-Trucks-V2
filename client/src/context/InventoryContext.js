import { useState, createContext } from 'react'

const InventoryContext = createContext()

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([])

  const penguin = () => {
    console.log('pickle')
  }

  return (
    <InventoryContext.Provider value={{ inventory, setInventory, penguin }}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContext
