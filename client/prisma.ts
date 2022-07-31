import { PrismaClient } from "@prisma/client";

declare module globalThis {
  let client: PrismaClient;
}

const client = globalThis.client || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV === "development") {
  globalThis.client = client;
}

export default client;
