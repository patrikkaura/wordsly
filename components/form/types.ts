import type { Word } from "types/index";

type FormState = {
  original: string;
  translation: string;
};

export type CreateForm = {
  name: string;
  description: string;
  words: Pick<Word, "translation" | "original">[];
  formState: FormState;
};

export type EditForm = {
  id: string;
  name: string;
  description: string;
  words: Word[];
  formState: FormState;
};

export enum FormTypeEnum {
  CREATE,
  UPDATE,
}
