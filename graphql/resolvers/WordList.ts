import {
  WordListInput,
  WordListResponse,
  CreateWordListInput,
  UpdateWordListInput,
  DeleteWordListInput,
} from "@generated/graphql";

import WordListModel from "@models/WordList";

type Request<T> = { request: T };

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

export async function deleteWordListMutation({
  id,
}: DeleteWordListInput): Promise<boolean> {
  return WordListModel.delete(id);
}

export const Queries = {
  wordList: () => wordListResolver(),
  wordListById: (_: any, { request }: Request<WordListInput>) =>
    wordListByIdResolver(request),
};

export const Mutations = {
  createWordList: (_: any, { request }: Request<CreateWordListInput>) =>
    createWordListMutation(request),
  updateWordList: (_: any, { request }: Request<UpdateWordListInput>) =>
    updateWordListMutation(request),
  deleteWordList: (_: any, { request }: Request<DeleteWordListInput>) =>
    deleteWordListMutation(request),
};
