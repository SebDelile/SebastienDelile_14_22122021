/**
 * takes a string and return true or false depending if the string begins with a vowel or not
 */
export const isBeginingWithVowel = (word: string): boolean =>
  'AEIOUaeiou'.includes(word[0]);
