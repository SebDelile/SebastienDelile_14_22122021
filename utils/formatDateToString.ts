export const formatDateToString = (date: Date): string => {
  const newDate = [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + date.getDate()).slice(-2),
  ].join('-');
  console.log(newDate);
  return newDate;
};
