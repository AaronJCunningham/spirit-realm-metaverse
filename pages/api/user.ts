import type { NextApiRequest, NextApiResponse } from "next";
import { createUser, searchUsers } from "../../lib/redis";

export default async function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const id = await searchUsers("test");
  res.status(200).json({ id });
}
