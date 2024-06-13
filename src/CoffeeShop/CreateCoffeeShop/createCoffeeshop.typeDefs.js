import { gql } from "apollo-server"

export default gql`
    type Mutation {
        createCoffeeshop(
            name: String!
            latitude: String
            longitude: String
            photos: [String]
            categories: [String]
        ): CoffeeShop!
    }
`
