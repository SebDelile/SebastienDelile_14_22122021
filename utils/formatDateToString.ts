export const formatDateToString = (date: Date | null): string | undefined => {
  if (!date) return undefined;
  return [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + date.getDate()).slice(-2),
  ].join('-');
};
