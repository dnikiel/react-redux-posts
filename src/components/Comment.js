import React from 'react'
import { Panel } from 'muicss/react'
import PropTypes from 'prop-types'

const Comment = (props) => {
  const  { name, email, body } = props.comment

  return(
    <div className="Comment">
      <Panel>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>{body}</p>
      </Panel>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
  })
}

export default Comment
