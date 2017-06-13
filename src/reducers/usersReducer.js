const usersInitialState = {
  users: [],
  isLoading: false,
  fetchError: null
}

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        fetchError: null
      }
    case 'FETCH_USERS_FAILED':
      return {
        ...state,
        isLoading: false,
        fetchError: action.payload
      }
    default:
      return state
  }
}

export default usersReducer
