export const convertPtBrDateToDateObj = (date: string): Date | null => {
  if (!date) return null;
  const [day, month, year] = date.split('/').map(Number);
  if (isValidDate(day, month, year)) {
    return new Date(year, month - 1, day);
  }

  return null;
};

export const isValidDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);

  return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
};

export const convertDateObjToPTBrDate = (date: Date): string => {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = padZero(date.getFullYear());

  return `${day}/${month}/${year}`;
};

export const padZero = (value: number): string => {
  return value < 10 ? `0${value}` : value.toString();
};
