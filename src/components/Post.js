import React from 'react'
import { Panel } from 'muicss/react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Post = (props) => {
  const  { title, user, body, id } = props.post
  const handleDelete = () => {
    props.deletePostById(id)
  }

  return(
    <div className="Post">
      <Panel>
        <h1><Link to={`/${id}`}>{title}</Link></h1>
        <h3>Author: {user.username}</h3>
        <p>{body}</p>
        <button onClick={handleDelete}>Delete</button>
      </Panel>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    body: PropTypes.string,
    id: PropTypes.number
  }),
  deletePostById: PropTypes.func
}

export default Post
