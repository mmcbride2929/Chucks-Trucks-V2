import { useContext } from 'react'

const InventoryContext = createContext()

const InventoryProvider = ({ children }) => {
  const initialState = {
    currentVehicles: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(inventoryReducer, initialState)

  return (
    <InventoryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  )
}

export default InventoryContext
