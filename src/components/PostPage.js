import React from 'react'
import { Panel } from 'muicss/react'
import Comments from './Comments'
import PropTypes from 'prop-types'

class PostPage extends React.Component {
  componentDidMount() {
    const { post, comments, fetchPostById, fetchCommentsById, match } = this.props

    if (!post) fetchPostById(match.params.postId)
    if (!comments.length) fetchCommentsById(match.params.postId)
  }

  render() {
    const  {
      post,
      postIsLoading,
      postFetchError,
      comments,
      commentsAreLoading,
      commentsFetchError,
    } = this.props

    return(
      <div className="PostPage">
        {postIsLoading && <p>fetching post...</p>}
        {postFetchError && <p>fetching post failed</p>}

        {post
          ? <Panel>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Panel>
          : null
        }

        <Comments
          comments={comments}
          commentsAreLoading={commentsAreLoading}
          commentsFetchError={commentsFetchError}
        />
      </div>
    )
  }
}

PostPage.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  }),
  postIsLoading: PropTypes.bool,
  postFetchError: PropTypes.object,
  comments: PropTypes.array,
  commentsAreLoading: PropTypes.bool,
  commentsFetchError: PropTypes.object,
  fetchPostById: PropTypes.func,
  fetchCommentsById: PropTypes.func,
  match: PropTypes.object
}

export default PostPage
