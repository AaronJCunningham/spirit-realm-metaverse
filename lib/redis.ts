import { Client, Entity, Schema } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(
      "REDIS_URL_REMOVED"
    );
  }
}

class User extends Entity {}

let schema = new Schema(
  User,
  {
    username: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createUser(data: { username: string }) {
  await connect();
  const repository = client.fetchRepository(schema);
  const user = repository.createEntity(data);
  const id = await repository.save(user);
  return id;
}

export async function searchUsers(q: string) {
  await connect();
  const repository = client.fetchRepository(schema);
  const user = await repository.search().where("username").eq(q).return.all();

  return user;
}

export async function createIndex() {
  await connect();
  const repository = client.fetchRepository(schema);
  await repository.createIndex();
}
