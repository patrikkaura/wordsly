import mongodb from "@graphql/adapters/client/prisma";
import type { Word } from "types";

export default class WordListAdapter {
  static async create(
    name: string,
    description: string | null,
    words: Word[],
    userId: string
  ): Promise<boolean> {
    await mongodb.wordList.create({
      data: {
        name,
        description: description || "",
        words: {
          create: words,
        },
        rating: 0,
        userId,
      },
    });

    return true;
  }

  static async delete(id: string, userId: string) {
    await mongodb.word.deleteMany({
      where: {
        AND: [{ wordListId: id }, { wordList: { userId } }],
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
    words: Word[],
    userId: string
  ) {
    await this.delete(id, userId);

    await this.create(name, description, words, userId);

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

  static async findAll(userId: string) {
    return mongodb.wordList.findMany({
      include: {
        words: true,
      },
      where: {
        userId,
      },
    });
  }

  static async findById(id: string, userId: string) {
    return mongodb.wordList.findFirst({
      where: {
        AND: [{ id }, { userId }],
      },
      include: {
        words: true,
      },
    });
  }
}
