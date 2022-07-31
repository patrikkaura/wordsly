import mongodb from "@client/prisma";

export default class WordAdapter {
  static async findAllByWordListId(id: string, userId: string) {
    return mongodb.word.findMany({
      where: {
        AND: [{ wordListId: id }, { wordList: { userId } }],
      },
    });
  }
}
