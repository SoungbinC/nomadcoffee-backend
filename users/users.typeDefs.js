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
        followers: [User]
        following: [User]
        totalFollowing: Int!
        totalFollowers: Int!
        isFollowing: Boolean!
        isMe: Boolean!
    }

    type Result {
        ok: Boolean!
        error: String
        token: String
    }
`
