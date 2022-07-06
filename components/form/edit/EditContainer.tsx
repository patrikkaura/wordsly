import { isApolloError } from "@apollo/client";
import CardForm from "@components/form/CardForm";
import { EditForm, FormTypeEnum } from "@components/form/types";
import { useUpdateWordListMutation } from "@generated/graphql";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { Word, WordList } from "types";

type Props = {
  wordList: Omit<WordList, "rating">;
};

function EditContainer({ wordList }: Props) {
  const { id, name, description } = wordList;

  const { handleSubmit, reset, ...methods } = useForm<EditForm>({
    mode: "onBlur",
    defaultValues: {
      id,
      name,
      description,
      words: wordList.words.map((word) => ({
        id: word.id,
        original: word.original,
        translation: word.translation,
      })),
      formState: {
        original: "",
        translation: "",
      },
    },
  });

  const router = useRouter();
  const [updateWordList] = useUpdateWordListMutation();

  const handleEditWordList = useCallback(
    async (formData: any) => {
      try {
        await updateWordList({
          variables: {
            request: {
              id: formData.id,
              name: formData.name,
              description: formData.description,
              words: formData.words.map((word: Word) => ({
                original: word.original,
                translation: word.translation,
              })),
            },
          },
        });

        await router.push("/");
      } catch (error) {
        if (isApolloError(error as Error)) {
          console.log(error);

          return;
        }

        throw error;
      }
    },
    [updateWordList]
  );

  return (
    <FormProvider {...{ ...methods, handleSubmit, reset }}>
      <form onSubmit={handleSubmit(handleEditWordList)}>
        <CardForm type={FormTypeEnum.UPDATE} />
      </form>
    </FormProvider>
  );
}

export default memo(EditContainer);
