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
