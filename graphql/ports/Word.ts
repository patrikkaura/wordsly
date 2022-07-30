import { WordAdapter } from "@graphql/adapters";

export default class WordPort {
  static async findAllByWordListId(id: string, userId: string) {
    return WordAdapter.findAllByWordListId(id, userId);
  }
}
