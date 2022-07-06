import "graphql-import-node";

import resolvers from "@graphql/resolvers";
import typeDefs from "@graphql/schema.graphql";
import { ApolloServer } from "apollo-server-micro";
import type { PageConfig } from "next";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const start = server.start();

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

async function startApollo(req: any, res: any) {
  await start;
  return server.createHandler({ path: "/api/graphql" })(req, res);
}

export default startApollo;
