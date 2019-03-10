import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
// import gql from "graphql-tag";
import { usersListQuery } from '../../queries/queries';
import UserCard from './UserCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faStar, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Users.css';

const Users = ({data, mutate}) => {
  if(data.loading){
    return <p>Loading...</p>
  }

  if(data.error){
    return <p>{data.error.message}</p>
  }

  // const usersList = data.getUsers.map(user => {
  //   return <li key={user.id}>
  //             {user.username}<br/>
  //             {user.email}<br/>
  //             {user.img}<br/>
  //             {user.games.map(game => {
  //               return (
  //                 <ul key={game.id}>
  //                   <li>{game.title}</li>
  //                   <li>{game.wins}</li>
  //                   <li>{game.losses}</li>
  //                   <li>{game.draws}</li>
  //                 </ul>
  //               )
  //             })}
  //         </li>
  // });
  
  return (
    <ul className="users">
      {data.getUsers.map(user => {
        return (
          <li className="users__list-item" key={user.id}>
            <UserCard user={user}/>
          </li>
        )
      })}
    </ul>
  )
}

// export const usersListQuery = gql`
//   query {
//     getUsers {
//       id
//       username
//       email
//       img
//       games {
//         id
//         title
//         author
//         wins
//         losses
//         draws
//       }
//     }
//   }
// `

// export const userLoginQuery = gql`
//   query {
//     login
//   }
// `

// export default graphql(usersListQuery)(Users);

export default withRouter(compose(
  graphql(usersListQuery)
)(Users));