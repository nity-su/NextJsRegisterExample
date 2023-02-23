// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const saltRounds = 10;

const prisma = new PrismaClient();

type Data = {
  result: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id: string = req.body.id;
  const password: string = req.body.password;

  const hashPass = await bcrypt.hash(password, saltRounds);

  const newUser = await prisma.user.create({
    data: {
      id: id,
      password: hashPass,
    },
  });

  if (newUser.id === id) {
    res.status(200).json({ result: "success" });
  }
  // const pass: string = req.body.pass;
}
