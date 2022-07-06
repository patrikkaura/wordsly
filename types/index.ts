export type Word = {
  id?: string;
  original: string;
  translation: string;
};

export type WordList = {
  id: string;
  name: string;
  description: string;
  words: Word[];
  rating: number;
};

export enum END_STATUS {
  SUCCESS = 1,
  PARTIAL_SUCCESS,
  FAILED,
}
