import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class Comments extends React.Component {
  render() {
    const  { comments, commentsAreLoading, commentsFetchError } = this.props

    return(
      <div className="Comments">
        {commentsAreLoading && <p>fetching comments...</p>}
        {commentsFetchError && <p>fetching comments failed</p>}

        {comments.length
          ? <div className="Comments__list">
              <h3>Comments:</h3>
              {comments.map(comment => <Comment comment={comment} key={`comment-${comment.id}`} />)}
            </div>
          : null
        }
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  commentsAreLoading: PropTypes.bool,
  commentsFetchError: PropTypes.object
}

export default Comments
