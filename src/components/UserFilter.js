import React from 'react'
import { Form, Select, Option } from 'muicss/react'
import PropTypes from 'prop-types'

const UserFilter = (props) => {
  const { handleChange, users, defaultValue } = props

  const onChange = (e) => {
    handleChange(e.target.value)
  }

  return(
    <div className="UserFilter">
      <h3>Filter by user:</h3>
      <Form>
        <Select defaultValue={defaultValue} onChange={onChange}>
          <Option value="" label="All" />
          {users.map(user =>
            <Option key={`user-${user.id}`} value={user.id} label={user.username} />
          )}
        </Select>
      </Form>
    </div>
  )
}

UserFilter.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string
    })
  ),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func
}

export default UserFilter
