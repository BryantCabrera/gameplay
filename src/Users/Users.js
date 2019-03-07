import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from "graphql-tag";

const Users = ({data, mutate}) => {
    if(data.loading){
        return <p>Loading...</p>
    }

    if(data.error){
        return <p>{data.error.message}</p>
    }

    const userList = data.getUsers.map((user) => {
        return <li key={user.id}>
                  {user.userame}
                  {user.email}
                  {user.img}
                  {user.games}
              </li>
        })
    
      return (
        <ul>
          {userList}
        </ul>
        )
}

export const userListQuery = gql`
  query {
    getUsers {
      id
      username
      email
      img
      games
    }
  }
`

export default graphql(userListQuery)(Users);