import client from "../../client"

export default {
    Query: {
        seeCategory: (_, { id }) => {
            console.log(id)
            return client.category
                .findUnique({
                    where: {
                        id,
                    },
                })
                .shops()
        },
    },
}
