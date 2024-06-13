import client from "../../client"
export default {
    Query: {
        seeCategories: () => client.category.findMany(),
    },
}
