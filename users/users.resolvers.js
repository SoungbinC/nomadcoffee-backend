import client from "../client"

export default {
    User: {
        totalFollowing: ({ username }) =>
            client.user.count({
                where: {
                    followers: {
                        some: {
                            username,
                        },
                    },
                },
            }),
        totalFollowers: ({ username }) =>
            client.user.count({
                where: {
                    following: {
                        some: {
                            username,
                        },
                    },
                },
            }),
        isMe: ({ username }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false
            }
            return username === loggedInUser.username
        },
        isFollowing: async ({ username }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false
            }
            const exists = await client.user.count({
                where: {
                    username: loggedInUser.username,
                    following: {
                        some: {
                            username,
                        },
                    },
                },
            })
            return Boolean(exists)
        },
    },
}
