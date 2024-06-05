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

    type createAccountResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        createAccount(
            username: String!
            email: String!
            name: String!
            password: String!
        ): createAccountResult!
    }

    type Query {
        seeProfile(username: String!): User
    }
`