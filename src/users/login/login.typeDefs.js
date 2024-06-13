import { gql } from "apollo-server"

export default gql`
    type Result {
        ok: Boolean!
        error: String
        token: String
    }
    type Mutation {
        login(username: String!, password: String!): Result!
    }
`
