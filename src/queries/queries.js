import gql from "graphql-tag";

// 1st line makes sure right value is passed
//the $ denotes a variable, and we are saying that variable must look like whatever comes after the : (defined in our server schema)
//this input variable will be called in the createUser mutation
//the 2nd object is the response we want back from the database
export const createUser = gql`
  mutation createUser($input: UserInput){
    createUser(input: $input){
        id
        username
        email
        password
        img
        games {
            id
            title
            author
            wins
            losses
            draws
        }
    }
  }
`

export const usersListQuery = gql`
  query {
    getUsers {
        id
        username
        email
        img
        games {
          id
          title
          author
          wins
          losses
          draws
        }
    }
  }
`

export const userLoginQuery = gql`
  mutation loginUser($input: UserLoginInput) {
    loginUser(input: $input) {
      id
      username
      email
      games {
        id
        title
        author
        wins
        losses
        draws
      }
    }
  }
`

// export default { createUser, usersListQuery, userLoginQuery };