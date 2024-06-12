import client from "../../client"
import { protectedResolver } from "../../users/users.utils"

export default {
    Mutation: {
        createCoffeeshop: protectedResolver(
            (
                _,
                { name, latitude, longitude, photos, categories },
                { loggedInUser }
            ) => {
                let categoryObjs = []
                let photoObjs = []
                if (categories) {
                    categoryObjs = categories.map((category) => ({
                        where: { name: category },
                        create: { name: category },
                    }))
                }
                if (photos) {
                    photoObjs = photos.map((photo) => ({
                        url: photo,
                    }))
                }
                return client.coffeeShop.create({
                    data: {
                        name,
                        user: {
                            connect: {
                                id: loggedInUser.id,
                            },
                        },
                        latitude,
                        longitude,
                        ...(categories && {
                            categories: {
                                connectOrCreate: categoryObjs,
                            },
                        }),
                        ...(photos && {
                            photos: {
                                createMany: {
                                    data: photoObjs,
                                },
                            },
                        }),
                    },
                })
            }
        ),
    },
}
