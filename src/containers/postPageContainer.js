import { connect } from 'react-redux'
import PostPage from '../components/PostPage'
import { fetchPostById, fetchCommentsById } from '../actions'
import { getPostById, getCommentsById } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    post: getPostById(state, ownProps),
    postIsLoading: state.postsReducer.postIsLoading,
    postFetchError: state.postsReducer.postFetchError,
    comments: getCommentsById(state, ownProps),
    commentsAreLoading: state.commentsReducer.isLoading,
    commentsFetchError: state.commentsReducer.fetchError
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostById: (id) => {
      dispatch(fetchPostById(id))
    },
    fetchCommentsById: (id) => {
      dispatch(fetchCommentsById(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
