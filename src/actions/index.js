import * as types from './actionTypes'

function handleResponse(response) {
  if (!response.ok) throw Error(response.statusText)

  return response.json()
}

export function fetchPosts() {
  return dispatch => {
    dispatch({ type: types.FETCH_POSTS_STARTED })

    return fetch('http://jsonplaceholder.typicode.com/posts')
      .then(handleResponse)
      .then(json => dispatch({ type: types.FETCH_POSTS_SUCCESS, payload: json }))
      .catch(error => dispatch({ type: types.FETCH_POSTS_FAILED, payload: error }))
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch({ type: types.FETCH_USERS_STARTED })

    return fetch('http://jsonplaceholder.typicode.com/users')
      .then(handleResponse)
      .then(json => dispatch({ type: types.FETCH_USERS_SUCCESS, payload: json }))
      .catch(error => dispatch({ type: types.FETCH_USERS_FAILED, payload: error }))
  }
}

export function fetchPostsAndUsers() {
  return dispatch => {
    Promise.all([
      dispatch(fetchPosts()),
      dispatch(fetchUsers())
    ])
  }
}

export function fetchPostById(id) {
  return dispatch => {
    dispatch({ type: types.FETCH_POST_STARTED })

    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(handleResponse)
      .then(json => dispatch({ type: types.FETCH_POST_SUCCESS, payload: json }))
      .catch(error => dispatch({ type: types.FETCH_POST_FAILED, payload: error }))
  }
}

export function fetchCommentsById(id) {
  return dispatch => {
    dispatch({ type: types.FETCH_COMMENTS_STARTED })

    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(handleResponse)
      .then(json => dispatch({ type: types.FETCH_COMMENTS_SUCCESS, id, payload: json }))
      .catch(error => dispatch({ type: types.FETCH_COMMENTS_FAILED, payload: error }))
  }
}

export function filterPostsByUserId(id) {
  return dispatch => {
    dispatch({ type: types.FILTER_POSTS_BY_USER_ID, id })
  }
}

export function deletePostById(id) {
  return dispatch => {
    dispatch({ type: types.DELETE_POST_STARTED, id })

    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
      .then(handleResponse)
      .then(json => dispatch({ type: types.DELETE_POST_SUCCESS, payload: json }))
      .catch(error => dispatch({ type: types.DELETE_POST_FAILED, payload: error }))
  }
}
