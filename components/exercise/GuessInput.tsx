import { Center, Input } from "@chakra-ui/react";
import React, { memo, useCallback, useRef } from "react";
import { useUpdateEffect } from "react-use";

type Props = {
  disabled: boolean;
  currentGuess: string;
  onGuessChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function GuessInput({ disabled = false, currentGuess, onGuessChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useUpdateEffect(() => {
    if (!disabled) {
      handleFocusInput();
    }
  }, [inputRef, disabled]);

  return (
    <Center>
      <Input
        autoFocus={true}
        ref={inputRef}
        disabled={disabled}
        w={300}
        placeholder="Napiš překlad ..."
        value={currentGuess}
        onChange={onGuessChange}
      />
    </Center>
  );
}

export default memo(GuessInput);
