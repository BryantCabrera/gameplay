import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from "graphql-tag";

const Users = ({data, mutate}) => {
    console.log(data, ' this is data from Users.js');
    if(data.loading){
        return <p>Loading...</p>
    }

    if(data.error){
        return <p>{data.error.message}</p>
    }

    const usersList = data.getUsers.map((user) => {
        return <li key={user.id}>
                  {user.userame}
                  {user.email}
                  {user.img}
                  {user.games}
              </li>
        })
    
      return (
        <ul>
          {usersList}
        </ul>
        )
}

export const usersListQuery = gql`
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

// export default graphql(usersListQuery)(Users);

export default compose(
    graphql(usersListQuery)
)(Users);