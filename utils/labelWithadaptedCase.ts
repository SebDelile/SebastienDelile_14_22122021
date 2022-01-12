/**
 * Takes a label and adapts the case to put it in the middle of a sentence (no uppercase for first char unless it is a full uppercase word)
 */
export const labelWithAdaptedCase = (label: string): string => {
  const isWordFullUpperCase = (word: string): boolean =>
    word.toUpperCase() === word;
  return label
    .split(' ')
    .map((word) => (isWordFullUpperCase(word) ? word : word.toLowerCase()))
    .join(' ');
};
