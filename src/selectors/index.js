import { createSelector } from 'reselect'

const getPosts = (state) => state.postsReducer.posts
const getUsers = (state) => state.usersReducer.users
const getFilterUserId = (state) => state.postsReducer.filterUserId

const getPostsWithUsers = createSelector(
  [getPosts, getUsers],
  (getPosts, getUsers) => {
    if (!getPosts.length || !getUsers.length) return []

    return getPosts.map(post => (
      {
        ...post,
        user: getUsers.filter(user => user.id === post.userId)[0]
      }
    ))
  }
)

export const getFilteredPosts = createSelector(
  [getPostsWithUsers, getFilterUserId],
  (getPostsWithUsers, getFilterUserId) => {
    if (!getFilterUserId) return getPostsWithUsers

    return getPostsWithUsers.filter(post => `${post.user.id}` === getFilterUserId)
  }
)

export const getPostById = (state, props) => {
  const { postId } = props.match.params

  return state.postsReducer.posts.filter(post => `${post.id}` === postId)[0]
}

export const getCommentsById = (state, props) => {
  const { postId } = props.match.params

  return state.commentsReducer.comments[postId] || []
}
