import { WordsInput, WordsResponse } from "@generated/graphql";

import WordModel from "@models/Word";

type Request<T> = { request: T };

export async function wordsResolver({
  id,
}: WordsInput): Promise<WordsResponse> {
  const items = await WordModel.findAllByWordListId(id);

  if (!items) {
    return { items: [] };
  }

  return { items };
}

export const Queries = {
  words: (_: any, { request }: Request<WordsInput>) => wordsResolver(request),
};
