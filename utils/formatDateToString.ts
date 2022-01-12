/**
 * takes a date object and returns the corresponding date string (format yyyy-mm-dd), returns undefined if no date as parameter.
 */
export const formatDateToString = (date: Date | null): string | undefined => {
  if (!date) return undefined;
  return [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + date.getDate()).slice(-2),
  ].join('-');
};
