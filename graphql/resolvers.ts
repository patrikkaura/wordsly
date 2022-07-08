import { Resolvers } from "@generated/graphql";
import { Queries as WordQueries } from "@graphql/resolvers/Word";
import {
  Mutations as WordListMutations,
  Queries as WordListQueries,
} from "@graphql/resolvers/WordList";

const resolvers: Resolvers = {
  Query: {
    ...WordQueries,
    ...WordListQueries,
  },
  Mutation: {
    ...WordListMutations,
  },
};

export default resolvers;
