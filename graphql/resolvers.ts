import { Resolvers } from "@generated/graphql";
import { Queries as WordQueries } from "@graphql/resolvers/Word";
import {
  Queries as WordListQueries,
  Mutations as WordListMutations,
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
