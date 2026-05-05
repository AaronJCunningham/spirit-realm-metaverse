import type { NextApiRequest, NextApiResponse } from "next";
import { createIndex } from "../../server/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await createIndex();
  res.status(200).send("ok");
}
