import { gql } from "apollo-server"

export default gql`
    type User {
        id: String!
        username: String!
        email: String!
        name: String!
        location: String
        avatar: String
        githubUsername: String
    }

    type Result {
        ok: Boolean!
        error: String
        token: String
    }
`
