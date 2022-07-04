import { ApolloServer } from "apollo-server-micro";
import "graphql-import-node";
import type { PageConfig } from "next";

import typeDefs from "@graphql/schema.graphql";
import resolvers from "@graphql/resolvers";

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
