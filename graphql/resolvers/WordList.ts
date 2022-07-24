import {
  CreateWordListInput,
  DeleteWordListInput,
  UpdateWordListInput,
  UpdateWordListRatingInput,
  WordListInput,
  WordListResponse,
} from "@generated/graphql";
import { WordListPort } from "@graphql/ports";

type Request<T> = { request: T };

export async function wordListResolver(): Promise<WordListResponse> {
  const items = await WordListPort.findAll();

  if (!items) {
    return { items: [] };
  }
  return { items: items };
}

export async function wordListByIdResolver({
  id,
}: WordListInput): Promise<WordListResponse> {
  const item = await WordListPort.findById(id);

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
  return WordListPort.create({
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
  return WordListPort.update({
    id,
    name,
    description,
    words,
  });
}

export async function updateWordListRatingMutation({
  id,
  rating,
}: UpdateWordListRatingInput): Promise<boolean> {
  return WordListPort.updateRating({ id, rating });
}

export async function deleteWordListMutation({
  id,
}: DeleteWordListInput): Promise<boolean> {
  return WordListPort.delete(id);
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
  updateWordListRating: (
    _: any,
    { request }: Request<UpdateWordListRatingInput>
  ) => updateWordListRatingMutation(request),
  deleteWordList: (_: any, { request }: Request<DeleteWordListInput>) =>
    deleteWordListMutation(request),
};
