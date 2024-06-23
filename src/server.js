require("dotenv").config()

import { ApolloServer } from "apollo-server"
import schema from "./schema"
import { getUser } from "./users/users.utils"

const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
        return {
            loggedInUser: await getUser(req.headers.token),
        }
    },
})

const PORT = process.env.PORT || 4000

server
    .listen({ port: PORT })
    .then(({ url }) => console.log(`🚀Server is running on ${url} ✅`))
