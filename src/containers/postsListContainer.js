import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { fetchPostsAndUsers, filterPostsByUserId, deletePostById } from '../actions'
import { getFilteredPosts } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: getFilteredPosts(state),
    users: state.usersReducer.users,
    filterUserId: state.postsReducer.filterUserId,
    allPostsFetched: state.postsReducer.allPostsFetched,
    isLoading: state.postsReducer.isLoading || state.usersReducer.isLoading,
    fetchError: state.postsReducer.fetchError || state.usersReducer.fetchError
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostsAndUsers: () => {
      dispatch(fetchPostsAndUsers())
    },
    filterPostsByUserId: (id) => {
      dispatch(filterPostsByUserId(id))
    },
    deletePostById: (id) => {
      dispatch(deletePostById(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
