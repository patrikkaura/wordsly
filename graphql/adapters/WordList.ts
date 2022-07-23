import mongodb from "@graphql/adapters/client/prisma";
import type { Word } from "types";

export default class WordListAdapter {
  static async create(
    name: string,
    description: string | null,
    words: Word[]
  ): Promise<boolean> {
    await mongodb.wordList.create({
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
    await mongodb.word.deleteMany({
      where: {
        wordListId: id,
      },
    });

    await mongodb.wordList.delete({
      where: {
        id,
      },
    });

    return true;
  }

  static async update(
    id: string,
    name: string,
    description: string,
    words: Word[]
  ) {
    await this.delete(id);

    await this.create(name, description, words);

    return true;
  }

  static async updateRating(id: string, rating: number) {
    await mongodb.wordList.update({
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
    return mongodb.wordList.findMany({
      include: {
        words: true,
      },
    });
  }

  static async findById(id: string) {
    return mongodb.wordList.findFirst({
      where: {
        id,
      },
      include: {
        words: true,
      },
    });
  }
}
