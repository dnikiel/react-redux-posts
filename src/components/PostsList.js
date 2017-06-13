import React from 'react'
import Post from './Post'
import UserFilter from './UserFilter'
import PropTypes from 'prop-types'

class PostsList extends React.Component {
  componentDidMount() {
    const { fetchPostsAndUsers, allPostsFetched } = this.props

    if (!allPostsFetched) fetchPostsAndUsers()
  }

  render() {
    const { isLoading,
            posts,
            users,
            fetchError,
            filterUserId,
            filterPostsByUserId,
            deletePostById
          } = this.props

    return (
      <div className="PostsList">
        {isLoading && <p>fetching posts...</p>}
        {fetchError && <p>fetching posts failed</p>}

        {users.length
          ? <UserFilter handleChange={filterPostsByUserId}
                        users={users}
                        defaultValue={filterUserId}
            />
          : null
        }

        {posts.length
          ? posts.map(post =>
              <Post post={post} deletePostById={deletePostById} key={`post-${post.id}`} />
            )
          : null
        }
      </div>
    )
  }
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  users: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchError: PropTypes.object,
  allPostsFetched: PropTypes.bool,
  filterUserId: PropTypes.string,
  filterPostsByUserId: PropTypes.func,
  deletePostById: PropTypes.func
}

export default PostsList
