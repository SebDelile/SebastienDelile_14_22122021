export const labelWithAdaptedCase = (label: string): string => {
  const isWordFullUpperCase = (word: string): boolean =>
    word.toUpperCase() === word;
  return label
    .split(' ')
    .map((word) => (isWordFullUpperCase(word) ? word : word.toLowerCase()))
    .join(' ');
};
