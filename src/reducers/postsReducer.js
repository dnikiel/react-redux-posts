const postsInitialState = {
  posts: [],
  filterUserId: '',
  allPostsFetched: false,
  isLoading: false,
  fetchError: null,
  postIsLoading: false,
  postFetchError: null,
}

const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        allPostsFetched: true,
        isLoading: false,
        fetchError: null
      }
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        isLoading: false,
        fetchError: action.payload
      }
    case 'FETCH_POST_STARTED':
      return {
        ...state,
        postIsLoading: true
      }
    case 'FETCH_POST_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, action.payload],
        postIsLoading: false,
        postFetchError: null
      }
    case 'FETCH_POST_FAILED':
      return {
        ...state,
        postIsLoading: false,
        postFetchError: action.payload
      }
    case 'FILTER_POSTS_BY_USER_ID':
      return {
        ...state,
        filterUserId: action.id
      }
    case 'DELETE_POST_STARTED':
      return {
        ...state,
        posts: [...state.posts].filter(post => post.id !== action.id)
      }
    // case 'DELETE_POST_SUCCESS':
    // case 'DELETE_POST_FAILED':
    default:
      return state
  }
}

export default postsReducer
