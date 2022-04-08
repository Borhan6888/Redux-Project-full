import React, {useEffect} from 'react'
import {userList} from '../Redux/Services/Actions/userAction'
import { connect } from 'react-redux'

const Users = ({ userList, loading, users, error }) => {
  
useEffect(() => {
   userList()
}, [])

  return (
    <div>
        {
                loading ? <h3>loading...</h3> : error ? <h3> {error} </h3> : <div>
                {
                    users.map(user => {
                        return <h4>{user.title}</h4>
                    })
                }
            </div>
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
    loading: state.userReducer.loading,
    users: state.userReducer.users,
    error: state.userReducer.error
})

export default connect(mapStateToProps, {userList})(Users)