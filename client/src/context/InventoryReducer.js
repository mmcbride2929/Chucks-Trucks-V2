const InventoryReducer = (state, action) => {
  switch (action.type) {
    case 'GET_WORKING_CARS':
      return {
        ...state,
        currentVehicles: action.payload,
        loading: false,
      }

    default:
      console.log('default')
  }
}
export default InventoryReducer
