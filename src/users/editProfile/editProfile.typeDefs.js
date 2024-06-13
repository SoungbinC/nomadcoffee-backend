import { gql } from "apollo-server"

export default gql`
    type Mutation {
        editProfile(
            username: String
            password: String
            email: String
            name: String
            location: String
            avatar: String
        ): Result!
    }
`
