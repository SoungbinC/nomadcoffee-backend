import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export default {
    Mutation: {
        createAccount: async (_, { username, email, name, password }) => {
            try {
                // check if username or email are already on DB
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                username,
                            },
                            {
                                email,
                            },
                        ],
                    },
                })

                if (existingUser) {
                    throw new Error("This username/email is already taken.")
                }

                // hash password
                const uglyPassword = await bcrypt.hash(password, 10)
                // save and return the user
                await client.user.create({
                    data: {
                        username,
                        email,
                        name,
                        password: uglyPassword,
                    },
                })
                return {
                    ok: true,
                }
            } catch (e) {
                return {
                    ok: false,
                    error: e,
                }
            }
        },
    },
}
