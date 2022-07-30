import {
  CreateWordListInput,
  DeleteWordListInput,
  UpdateWordListInput,
  UpdateWordListRatingInput,
  WordListByIdInput,
  WordListInput,
  WordListResponse,
} from "@generated/graphql";
import { WordListPort } from "@graphql/ports";

type Request<T> = { request: T };

export async function wordList({
  userId,
}: WordListInput): Promise<WordListResponse> {
  const items = await WordListPort.findAll(userId);

  if (!items) {
    return { items: [] };
  }
  return { items: items };
}

export async function wordListById({
  id,
  userId,
}: WordListByIdInput): Promise<WordListResponse> {
  const item = await WordListPort.findById(id, userId);

  if (!item) {
    return { items: [] };
  }

  return { items: [item] };
}

export async function createWordList({
  name,
  description,
  words,
  userId,
}: CreateWordListInput): Promise<boolean> {
  return WordListPort.create({
    name,
    description,
    words,
    userId,
  });
}

export async function updateWordList({
  id,
  name,
  description,
  words,
  userId,
}: UpdateWordListInput): Promise<boolean> {
  return WordListPort.update({
    id,
    name,
    description,
    words,
    userId,
  });
}

export async function updateWordListRating({
  id,
  rating,
}: UpdateWordListRatingInput): Promise<boolean> {
  return WordListPort.updateRating({ id, rating });
}

export async function deleteWordList({
  id,
  userId,
}: DeleteWordListInput): Promise<boolean> {
  return WordListPort.delete(id, userId);
}

export const Queries = {
  wordList: (_: any, { request }: Request<WordListInput>) => wordList(request),
  wordListById: (_: any, { request }: Request<WordListByIdInput>) =>
    wordListById(request),
};

export const Mutations = {
  createWordList: (_: any, { request }: Request<CreateWordListInput>) =>
    createWordList(request),
  updateWordList: (_: any, { request }: Request<UpdateWordListInput>) =>
    updateWordList(request),
  updateWordListRating: (
    _: any,
    { request }: Request<UpdateWordListRatingInput>
  ) => updateWordListRating(request),
  deleteWordList: (_: any, { request }: Request<DeleteWordListInput>) =>
    deleteWordList(request),
};
