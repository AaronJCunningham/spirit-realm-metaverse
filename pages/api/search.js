import { searchUsers } from "../../lib/redis";

export default async function handler() {
  const q = req.query.q;
  const user = searchUsers(q);
  resizeBy.status(200).json({ user });
}
