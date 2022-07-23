import { WordListAdapter } from "@graphql/adapters";
import { Word } from "types/index";

type WordListCreateInput = {
  name: string;
  description: string | null;
  words: Pick<Word, "original" | "translation">[];
};

type WordListUpdateInput = {
  id: string;
  name: string;
  description: string;
  words: Pick<Word, "original" | "translation">[];
};

type WordListUpdateRatingInput = {
  id: string;
  rating: number;
};

export default class WordListPort {
  static async create({ name, description, words }: WordListCreateInput) {
    return WordListAdapter.create(name, description, words);
  }

  static async delete(id: string) {
    return WordListAdapter.delete(id);
  }

  static async update({ id, name, description, words }: WordListUpdateInput) {
    return WordListAdapter.update(id, name, description, words);
  }

  static async updateRating({ id, rating }: WordListUpdateRatingInput) {
    return WordListAdapter.updateRating(id, rating);
  }

  static async findAll() {
    return WordListAdapter.findAll();
  }

  static async findById(id: string) {
    return WordListAdapter.findById(id);
  }
}
