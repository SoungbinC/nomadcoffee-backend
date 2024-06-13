import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { protectedResolver } from "../users.utils"
export default {
    Mutation: {
        editProfile: protectedResolver(
            async (
                _,
                {
                    username,
                    email,
                    name,
                    location,
                    password: newPassword,
                    avatarURL,
                },
                { loggedInUser }
            ) => {
                let uglyPassword = null
                if (newPassword) {
                    uglyPassword = await bcrypt.hash(newPassword, 10)
                }
                const updatedUser = await client.user.update({
                    where: {
                        id: loggedInUser.id,
                    },
                    data: {
                        username,
                        email,
                        name,
                        location,
                        ...(uglyPassword && { password: uglyPassword }),
                        avatarURL,
                    },
                })
                if (updatedUser.id) {
                    return {
                        ok: true,
                    }
                } else {
                    return {
                        ok: false,
                        error: "Could not update profile.",
                    }
                }
            }
        ),
    },
}
