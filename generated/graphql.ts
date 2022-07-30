import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateWordListInput = {
  description: Scalars["String"];
  name: Scalars["String"];
  userId: Scalars["ID"];
  words: Array<WordInput>;
};

export type DeleteWordListInput = {
  id: Scalars["ID"];
  userId: Scalars["ID"];
};

export type Mutation = {
  createWordList: Scalars["Boolean"];
  deleteWordList: Scalars["Boolean"];
  updateWordList: Scalars["Boolean"];
  updateWordListRating: Scalars["Boolean"];
};

export type MutationCreateWordListArgs = {
  request: CreateWordListInput;
};

export type MutationDeleteWordListArgs = {
  request: DeleteWordListInput;
};

export type MutationUpdateWordListArgs = {
  request: UpdateWordListInput;
};

export type MutationUpdateWordListRatingArgs = {
  request: UpdateWordListRatingInput;
};

export type Query = {
  wordList: WordListResponse;
  wordListById: WordListResponse;
  words: WordsResponse;
};

export type QueryWordListArgs = {
  request: WordListInput;
};

export type QueryWordListByIdArgs = {
  request: WordListByIdInput;
};

export type QueryWordsArgs = {
  request: WordsInput;
};

export type UpdateWordListInput = {
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  userId: Scalars["ID"];
  words: Array<WordInput>;
};

export type UpdateWordListRatingInput = {
  id: Scalars["ID"];
  rating: Scalars["Int"];
  userId: Scalars["ID"];
};

export type Word = {
  id: Scalars["ID"];
  original: Scalars["String"];
  translation: Scalars["String"];
};

export type WordInput = {
  original: Scalars["String"];
  translation: Scalars["String"];
};

export type WordList = {
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  rating: Scalars["Int"];
  words: Array<Word>;
};

export type WordListByIdInput = {
  id: Scalars["ID"];
  userId: Scalars["ID"];
};

export type WordListInput = {
  userId: Scalars["ID"];
};

export type WordListResponse = {
  items: Array<WordList>;
};

export type WordsInput = {
  id: Scalars["ID"];
  userId: Scalars["ID"];
};

export type WordsResponse = {
  items: Array<Word>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CreateWordListInput: CreateWordListInput;
  DeleteWordListInput: DeleteWordListInput;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UpdateWordListInput: UpdateWordListInput;
  UpdateWordListRatingInput: UpdateWordListRatingInput;
  Word: ResolverTypeWrapper<Word>;
  WordInput: WordInput;
  WordList: ResolverTypeWrapper<WordList>;
  WordListByIdInput: WordListByIdInput;
  WordListInput: WordListInput;
  WordListResponse: ResolverTypeWrapper<WordListResponse>;
  WordsInput: WordsInput;
  WordsResponse: ResolverTypeWrapper<WordsResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  CreateWordListInput: CreateWordListInput;
  DeleteWordListInput: DeleteWordListInput;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Mutation: {};
  Query: {};
  String: Scalars["String"];
  UpdateWordListInput: UpdateWordListInput;
  UpdateWordListRatingInput: UpdateWordListRatingInput;
  Word: Word;
  WordInput: WordInput;
  WordList: WordList;
  WordListByIdInput: WordListByIdInput;
  WordListInput: WordListInput;
  WordListResponse: WordListResponse;
  WordsInput: WordsInput;
  WordsResponse: WordsResponse;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createWordList?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateWordListArgs, "request">
  >;
  deleteWordList?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteWordListArgs, "request">
  >;
  updateWordList?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWordListArgs, "request">
  >;
  updateWordListRating?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWordListRatingArgs, "request">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  wordList?: Resolver<
    ResolversTypes["WordListResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryWordListArgs, "request">
  >;
  wordListById?: Resolver<
    ResolversTypes["WordListResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryWordListByIdArgs, "request">
  >;
  words?: Resolver<
    ResolversTypes["WordsResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryWordsArgs, "request">
  >;
};

export type WordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Word"] = ResolversParentTypes["Word"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  original?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  translation?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WordListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WordList"] = ResolversParentTypes["WordList"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  words?: Resolver<Array<ResolversTypes["Word"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WordListResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WordListResponse"] = ResolversParentTypes["WordListResponse"]
> = {
  items?: Resolver<Array<ResolversTypes["WordList"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WordsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WordsResponse"] = ResolversParentTypes["WordsResponse"]
> = {
  items?: Resolver<Array<ResolversTypes["Word"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Word?: WordResolvers<ContextType>;
  WordList?: WordListResolvers<ContextType>;
  WordListResponse?: WordListResponseResolvers<ContextType>;
  WordsResponse?: WordsResponseResolvers<ContextType>;
};

export type AllWordListsQueryVariables = Exact<{
  request: WordListInput;
}>;

export type AllWordListsQuery = {
  wordList: {
    items: Array<{
      id: string;
      name: string;
      rating: number;
      words: Array<{ id: string }>;
    }>;
  };
};

export type WordsQueryVariables = Exact<{
  request: WordsInput;
}>;

export type WordsQuery = {
  words: {
    items: Array<{ id: string; original: string; translation: string }>;
  };
};

export type UpdateWordListRatingMutationVariables = Exact<{
  request: UpdateWordListRatingInput;
}>;

export type UpdateWordListRatingMutation = { updateWordListRating: boolean };

export type CreateWordListMutationVariables = Exact<{
  request: CreateWordListInput;
}>;

export type CreateWordListMutation = { createWordList: boolean };

export type WordListByIdQueryVariables = Exact<{
  request: WordListByIdInput;
}>;

export type WordListByIdQuery = {
  wordListById: {
    items: Array<{
      id: string;
      name: string;
      description: string;
      words: Array<{ id: string; original: string; translation: string }>;
    }>;
  };
};

export type UpdateWordListMutationVariables = Exact<{
  request: UpdateWordListInput;
}>;

export type UpdateWordListMutation = { updateWordList: boolean };

export const AllWordListsDocument = gql`
  query AllWordLists($request: WordListInput!) {
    wordList(request: $request) {
      items {
        id
        name
        rating
        words {
          id
        }
      }
    }
  }
`;

/**
 * __useAllWordListsQuery__
 *
 * To run a query within a React component, call `useAllWordListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllWordListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllWordListsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAllWordListsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    AllWordListsQuery,
    AllWordListsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    AllWordListsQuery,
    AllWordListsQueryVariables
  >(AllWordListsDocument, options);
}
export function useAllWordListsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AllWordListsQuery,
    AllWordListsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    AllWordListsQuery,
    AllWordListsQueryVariables
  >(AllWordListsDocument, options);
}
export type AllWordListsQueryHookResult = ReturnType<
  typeof useAllWordListsQuery
>;
export type AllWordListsLazyQueryHookResult = ReturnType<
  typeof useAllWordListsLazyQuery
>;
export type AllWordListsQueryResult = ApolloReactCommon.QueryResult<
  AllWordListsQuery,
  AllWordListsQueryVariables
>;
export const WordsDocument = gql`
  query Words($request: WordsInput!) {
    words(request: $request) {
      items {
        id
        original
        translation
      }
    }
  }
`;

/**
 * __useWordsQuery__
 *
 * To run a query within a React component, call `useWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useWordsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    WordsQuery,
    WordsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<WordsQuery, WordsQueryVariables>(
    WordsDocument,
    options
  );
}
export function useWordsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    WordsQuery,
    WordsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<WordsQuery, WordsQueryVariables>(
    WordsDocument,
    options
  );
}
export type WordsQueryHookResult = ReturnType<typeof useWordsQuery>;
export type WordsLazyQueryHookResult = ReturnType<typeof useWordsLazyQuery>;
export type WordsQueryResult = ApolloReactCommon.QueryResult<
  WordsQuery,
  WordsQueryVariables
>;
export const UpdateWordListRatingDocument = gql`
  mutation UpdateWordListRating($request: UpdateWordListRatingInput!) {
    updateWordListRating(request: $request)
  }
`;
export type UpdateWordListRatingMutationFn = ApolloReactCommon.MutationFunction<
  UpdateWordListRatingMutation,
  UpdateWordListRatingMutationVariables
>;

/**
 * __useUpdateWordListRatingMutation__
 *
 * To run a mutation, you first call `useUpdateWordListRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWordListRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWordListRatingMutation, { data, loading, error }] = useUpdateWordListRatingMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateWordListRatingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateWordListRatingMutation,
    UpdateWordListRatingMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    UpdateWordListRatingMutation,
    UpdateWordListRatingMutationVariables
  >(UpdateWordListRatingDocument, options);
}
export type UpdateWordListRatingMutationHookResult = ReturnType<
  typeof useUpdateWordListRatingMutation
>;
export type UpdateWordListRatingMutationResult =
  ApolloReactCommon.MutationResult<UpdateWordListRatingMutation>;
export type UpdateWordListRatingMutationOptions =
  ApolloReactCommon.BaseMutationOptions<
    UpdateWordListRatingMutation,
    UpdateWordListRatingMutationVariables
  >;
export const CreateWordListDocument = gql`
  mutation CreateWordList($request: CreateWordListInput!) {
    createWordList(request: $request)
  }
`;
export type CreateWordListMutationFn = ApolloReactCommon.MutationFunction<
  CreateWordListMutation,
  CreateWordListMutationVariables
>;

/**
 * __useCreateWordListMutation__
 *
 * To run a mutation, you first call `useCreateWordListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWordListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWordListMutation, { data, loading, error }] = useCreateWordListMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateWordListMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateWordListMutation,
    CreateWordListMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    CreateWordListMutation,
    CreateWordListMutationVariables
  >(CreateWordListDocument, options);
}
export type CreateWordListMutationHookResult = ReturnType<
  typeof useCreateWordListMutation
>;
export type CreateWordListMutationResult =
  ApolloReactCommon.MutationResult<CreateWordListMutation>;
export type CreateWordListMutationOptions =
  ApolloReactCommon.BaseMutationOptions<
    CreateWordListMutation,
    CreateWordListMutationVariables
  >;
export const WordListByIdDocument = gql`
  query WordListById($request: WordListByIdInput!) {
    wordListById(request: $request) {
      items {
        id
        name
        description
        words {
          id
          original
          translation
        }
      }
    }
  }
`;

/**
 * __useWordListByIdQuery__
 *
 * To run a query within a React component, call `useWordListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWordListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordListByIdQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useWordListByIdQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    WordListByIdQuery,
    WordListByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    WordListByIdQuery,
    WordListByIdQueryVariables
  >(WordListByIdDocument, options);
}
export function useWordListByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    WordListByIdQuery,
    WordListByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    WordListByIdQuery,
    WordListByIdQueryVariables
  >(WordListByIdDocument, options);
}
export type WordListByIdQueryHookResult = ReturnType<
  typeof useWordListByIdQuery
>;
export type WordListByIdLazyQueryHookResult = ReturnType<
  typeof useWordListByIdLazyQuery
>;
export type WordListByIdQueryResult = ApolloReactCommon.QueryResult<
  WordListByIdQuery,
  WordListByIdQueryVariables
>;
export const UpdateWordListDocument = gql`
  mutation UpdateWordList($request: UpdateWordListInput!) {
    updateWordList(request: $request)
  }
`;
export type UpdateWordListMutationFn = ApolloReactCommon.MutationFunction<
  UpdateWordListMutation,
  UpdateWordListMutationVariables
>;

/**
 * __useUpdateWordListMutation__
 *
 * To run a mutation, you first call `useUpdateWordListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWordListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWordListMutation, { data, loading, error }] = useUpdateWordListMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateWordListMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateWordListMutation,
    UpdateWordListMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    UpdateWordListMutation,
    UpdateWordListMutationVariables
  >(UpdateWordListDocument, options);
}
export type UpdateWordListMutationHookResult = ReturnType<
  typeof useUpdateWordListMutation
>;
export type UpdateWordListMutationResult =
  ApolloReactCommon.MutationResult<UpdateWordListMutation>;
export type UpdateWordListMutationOptions =
  ApolloReactCommon.BaseMutationOptions<
    UpdateWordListMutation,
    UpdateWordListMutationVariables
  >;
