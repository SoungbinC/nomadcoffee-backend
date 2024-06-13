import client from "../../client"

export default {
    Mutation: {
        editCoffeeShop: async (
            _,
            { id, name, latitude, longitude, photos, categories }
        ) => {
            const shop = await client.coffeeShop.findUnique({
                where: {
                    id,
                },
                include: {
                    categories: {
                        select: {
                            id: true,
                        },
                    },
                },
            })
            if (!shop) {
                return {
                    ok: false,
                    error: "CoffeeShop not found.",
                }
            }
            let categoryObjs = []
            let photoObjs = []
            if (categories) {
                categoryObjs = categories.map((category) => ({
                    where: {
                        name: category,
                    },
                    create: {
                        name: category,
                    },
                }))
            }
            if (photos) {
                photoObjs = photos.map((photo) => ({
                    where: {
                        name: photo,
                    },
                    create: {
                        name: photo,
                    },
                }))
            }
            const updatedShop = await client.coffeeShop.update({
                where: {
                    id,
                },
                data: {
                    name,
                    latitude,
                    longitude,
                    ...(categories && {
                        categories: {
                            disconnect: shop.categories,
                            connectOrCreate: categoryObjs,
                        },
                    }),

                    ...(photos && {
                        photos: {
                            disconnect: shop.photos,
                            connectOrCreate: photoObjs,
                        },
                    }),
                },
            })
            if (!updatedShop) {
                return {
                    ok: false,
                    error: "Could not update coffee shop.",
                }
            }
            return {
                ok: true,
            }
        },
    },
}
