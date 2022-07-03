import client from "models/clients/prisma";

export default class WordModel {
  static async findAllByWordListId(id: string) {
    return client.word.findMany({
      where: {
        wordListId: id,
      },
    });
  }
}
