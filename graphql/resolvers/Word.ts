import { WordsInput, WordsResponse } from "@generated/graphql";
import { WordPort } from "@graphql/ports";

type Request<T> = { request: T };

export async function words({
  id,
  userId,
}: WordsInput): Promise<WordsResponse> {
  const items = await WordPort.findAllByWordListId(id, userId);

  if (!items) {
    return { items: [] };
  }

  return { items };
}

export const Queries = {
  words: (_: any, { request }: Request<WordsInput>) => words(request),
};
