import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const clinet = new PrismaClient().$extends(withAccelerate())

export default clinet
