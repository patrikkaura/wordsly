import {
  WordList,
  WordListResponse,
  WordListInput,
  WordsInput,
  WordsResponse,
} from '@generated/graphql';

const store: WordList[] = [
  {
    id: '1',
    name: 'Transport',
    description: 'all transport types',
    words: [{ id: '1', original: 'auto', translation: 'car' }],
    rating: 3,
  },
  {
    id: '2',
    name: 'Animals',
    description: 'all living animals',
    words: [
      { id: '1', original: 'lev', translation: 'lion' },
      { id: '2', original: 'pes', translation: 'dog' },
      { id: '3', original: 'kocka', translation: 'cat' },
      { id: '4', original: 'jesterka', translation: 'lizzard' },
      { id: '5', original: 'tucnak', translation: 'penguin' },
    ],
    rating: 2,
  },
  {
    id: '3',
    name: 'Furniture',
    description: 'all furniture types',
    words: [
      { id: '1', original: 'stul', translation: 'table' },
      { id: '2', original: 'zidle', translation: 'chair' },
    ],
    rating: 1,
  },
  {
    id: '4',
    name: 'Transport',
    description: 'all transport types',
    words: [
      { id: '1', original: 'auto', translation: 'car' },
      { id: '2', original: 'lod', translation: 'boat' },
      { id: '3', original: 'letadlo', translation: 'plane' },
      { id: '4', original: 'traktors', translation: 'tractor' },
      { id: '1', original: 'auto', translation: 'car' },
      { id: '2', original: 'lod', translation: 'boat' },
      { id: '3', original: 'letadlo', translation: 'plane' },
      { id: '4', original: 'traktors', translation: 'tractor' },
      { id: '1', original: 'auto', translation: 'car' },
      { id: '2', original: 'lod', translation: 'boat' },
      { id: '3', original: 'letadlo', translation: 'plane' },
      { id: '4', original: 'traktors', translation: 'tractor' },
    ],
    rating: 3,
  },
  {
    id: '5',
    name: 'Animals',
    description: 'all living animals',
    words: [
      { id: '1', original: 'lev', translation: 'lion' },
      { id: '2', original: 'pes', translation: 'dog' },
      { id: '3', original: 'kocka', translation: 'cat' },
      { id: '4', original: 'jesterka', translation: 'lizzard' },
      { id: '5', original: 'tucnak', translation: 'penguin' },
    ],
    rating: 2,
  },
  {
    id: '6',
    name: 'Furniture',
    description: 'all furniture types',
    words: [
      { id: '1', original: 'stul', translation: 'table' },
      { id: '2', original: 'zidle', translation: 'chair' },
      { id: '3', original: 'skrin', translation: 'cupboard' },
      { id: '4', original: 'televize', translation: 'television' },
      { id: '5', original: 'zrcadlo', translation: 'mirror' },
    ],
    rating: 1,
  },
];

type WordsListByIdResolverInput = {
  request: WordListInput;
};

type WordsResolverInput = {
  request: WordsInput;
};

export function wordListResolver(): WordListResponse {
  return { items: store };
}

export function wordListByIdResolver({ id }: WordListInput): WordListResponse {
  const wordList = store.filter((wordList) => wordList.id === id);

  return { items: wordList };
}

export function wordsResolver({ id }: WordsInput): WordsResponse {
  const wordList = store.filter((wordList) => wordList.id === id);

  return { items: wordList[0].words };
}
export const Queries = {
  wordList: () => wordListResolver(),
  wordListById: (_: any, { request }: WordsListByIdResolverInput) =>
    wordListByIdResolver(request),
  words: (_: any, { request }: WordsResolverInput) => wordsResolver(request),
};
