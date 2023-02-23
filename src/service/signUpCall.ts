import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function call() {
  // console.log(prisma.main);
  const newUser = await prisma.user.create({
    data: {
      id: "alice@prisma.io",
      password: "1234ditm1234",
    },
  });
  console.log(newUser);
}
