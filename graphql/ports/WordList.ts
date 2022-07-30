import { WordListAdapter } from "@graphql/adapters";
import { Word } from "types/index";

type WordListCreateInput = {
  name: string;
  description: string | null;
  words: Pick<Word, "original" | "translation">[];
  userId: string;
};

type WordListUpdateInput = {
  id: string;
  name: string;
  description: string;
  words: Pick<Word, "original" | "translation">[];
  userId: string;
};

type WordListUpdateRatingInput = {
  id: string;
  rating: number;
};

export default class WordListPort {
  static async create({
    name,
    description,
    words,
    userId,
  }: WordListCreateInput) {
    return WordListAdapter.create(name, description, words, userId);
  }

  static async delete(id: string, userId: string) {
    return WordListAdapter.delete(id, userId);
  }

  static async update({
    id,
    name,
    description,
    words,
    userId,
  }: WordListUpdateInput) {
    return WordListAdapter.update(id, name, description, words, userId);
  }

  static async updateRating({ id, rating }: WordListUpdateRatingInput) {
    return WordListAdapter.updateRating(id, rating);
  }

  static async findAll(userId: string) {
    return WordListAdapter.findAll(userId);
  }

  static async findById(id: string, userId: string) {
    return WordListAdapter.findById(id, userId);
  }
}
