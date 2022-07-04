import { Resolvers } from '@generated/graphql';
import { Queries as WordQueries, Mutations as WordMutations } from '@graphql/resolvers/word';

const resolvers: Resolvers = {
  Query: {
    ...WordQueries,
  },
  Mutation: {
    ...WordMutations,
  }
};

export default resolvers;
