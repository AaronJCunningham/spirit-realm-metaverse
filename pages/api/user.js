import { createNullActor } from "xstate/lib/Actor";
import { createUser, sear } from "../../lib/redis";

export default async function handleUser(req, res) {
  const id = await searchUser("test");
  res.status(200).json({ id });
}

const handleSubmit = async (event) => {
  const form = new FormData(event.target);
  const formData = Object.fromEntries(form.entries());

  const res = await fetch("/api/user", {
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = res.json();
};
