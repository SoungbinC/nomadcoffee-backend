import client from "../client"

export default {
    Category: {
        totalShops: ({ id }) =>
            client.coffeeShop.count({
                where: {
                    categories: {
                        some: {
                            id,
                        },
                    },
                },
            }),
        shops: ({ id }, { page }) => {
            return client.category
                .findUnique({
                    where: {
                        id,
                    },
                })
                .coffeeShops({
                    take: 5,
                    skip: (page - 1) * 5,
                })
        },
    },
}
