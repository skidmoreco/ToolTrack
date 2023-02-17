import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile {
                _id
                email
            }
        }
    } 
`;

export const ADD_USER = gql`
    mutation addUser($name: String!, $email)

`