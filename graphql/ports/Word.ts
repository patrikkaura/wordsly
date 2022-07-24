import { WordAdapter } from "@graphql/adapters";

export default class WordPort {
  static async findAllByWordListId(id: string) {
    return WordAdapter.findAllByWordListId(id);
  }
}
