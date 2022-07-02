import { Resolvers } from '@generated/graphql';
import { Queries as WordQueries } from '@graphql/resolvers/word';

const resolvers: Resolvers = {
  Query: {
    ...WordQueries,
  },
};

export default resolvers;
