import client from "models/clients/prisma";
import type { Word } from "types";

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

export default class WordListModel {
  static async create({
    name,
    description,
    words,
  }: WordListCreateInput): Promise<boolean> {
    await client.wordList.create({
      data: {
        name,
        description: description || "",
        words: {
          create: words,
        },
        rating: 0,
      },
    });

    return true;
  }

  static async delete(id: string) {
    await client.word.deleteMany({
      where: {
        wordListId: id,
      },
    });

    await client.wordList.delete({
      where: {
        id,
      },
    });

    return true;
  }

  static async update({ id, name, description, words }: WordListUpdateInput) {
    await this.delete(id);

    await this.create({ name, description, words });

    return true;
  }

  static async updateRating({ id, rating }: WordListUpdateRatingInput) {
    await client.wordList.update({
      data: {
        rating,
      },
      where: {
        id,
      },
    });

    return true;
  }

  static async findAll() {
    return client.wordList.findMany({
      include: {
        words: true,
      },
    });
  }

  static async findById(id: string) {
    return client.wordList.findFirst({
      where: {
        id,
      },
      include: {
        words: true,
      },
    });
  }
}
