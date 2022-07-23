import mongodb from "@graphql/adapters/client/prisma";

export default class WordAdapter {
  static async findAllByWordListId(id: string) {
    return mongodb.word.findMany({
      where: {
        wordListId: id,
      },
    });
  }
}
