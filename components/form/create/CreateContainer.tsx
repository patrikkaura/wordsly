import { isApolloError } from "@apollo/client";
import CardForm from "@components/form/CardForm";
import { CreateForm,FormTypeEnum } from "@components/form/types";
import { useCreateWordListMutation } from "@generated/graphql";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { FormProvider,useForm } from "react-hook-form";
import type { Word } from "types";

function CreateContainer() {
  const methods = useForm<CreateForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      words: [],
      formState: {
        original: "",
        translation: "",
      },
    },
  });

  const router = useRouter();
  const [createWordList] = useCreateWordListMutation();

  const handleCreateWordList = useCallback(
    async (formData: any) => {
      try {
        await createWordList({
          variables: {
            request: {
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
    [createWordList]
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleCreateWordList)}>
        <CardForm type={FormTypeEnum.CREATE} />
      </form>
    </FormProvider>
  );
}

export default memo(CreateContainer);
