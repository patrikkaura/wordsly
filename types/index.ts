export type Word = {
  id: string;
  original: string;
  translation: string;
};

export type WordList = {
  id: string;
  name: string;
  description: string | null;
  words: Word[];
  rating: number;
};
