// @flow

type State = {
  comments: Object,
  isLoading: boolean,
  fetchError: ?Object
}

const commentsInitialState = {
  comments: {},
  isLoading: false,
  fetchError: null
}

const commentsReducer = (state: State = commentsInitialState, action: Object): State => {
  switch (action.type) {
    case 'FETCH_COMMENTS_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: { ...state.comments, [action.id]: action.payload },
        isLoading: false,
        fetchError: null
      }
    case 'FETCH_COMMENTS_FAILED':
      return {
        ...state,
        isLoading: false,
        fetchError: action.payload
      }
    default:
      return state
  }
}

export default commentsReducer
