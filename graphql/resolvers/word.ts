import {
  WordListInput,
  WordListResponse,
  WordsInput,
  CreateWordListInput,
  UpdateWordListInput,
  WordsResponse,
} from "@generated/graphql";

import WordModel from "@models/Word";
import WordListModel from "@models/WordList";

type InputRequest<T> = {
  request: T;
};

export async function wordListResolver(): Promise<WordListResponse> {
  const items = await WordListModel.findAll();

  if (!items) {
    return { items: [] };
  }
  return { items: items };
}

export async function wordListByIdResolver({
  id,
}: WordListInput): Promise<WordListResponse> {
  const item = await WordListModel.findById(id);

  if (!item) {
    return { items: [] };
  }

  return { items: [item] };
}

export async function wordsResolver({
  id,
}: WordsInput): Promise<WordsResponse> {
  const items = await WordModel.findAllByWordListId(id);

  if (!items) {
    return { items: [] };
  }

  return { items };
}

export async function createWordListMutation({
  name,
  description,
  words,
}: CreateWordListInput): Promise<boolean> {
  return WordListModel.create({
    name,
    description,
    words,
  });
}

export async function updateWordListMutation({
  id,
  name,
  description,
  words,
}: UpdateWordListInput): Promise<boolean> {
  return WordListModel.update({
    id,
    name,
    description,
    words,
  });
}

export const Queries = {
  wordList: () => wordListResolver(),
  wordListById: (_: any, { request }: InputRequest<WordListInput>) =>
    wordListByIdResolver(request),
  words: (_: any, { request }: InputRequest<WordsInput>) =>
    wordsResolver(request),
};

export const Mutations = {
  createWordList: (_: any, { request }: InputRequest<CreateWordListInput>) =>
    createWordListMutation(request),
  updateWordList: (_: any, { request }: InputRequest<UpdateWordListInput>) =>
    updateWordListMutation(request),
};
