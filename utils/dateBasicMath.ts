type OperatorShape = {
  y?: number;
  m?: number;
  d?: number;
};
export const dateBasicMath = (date: Date, operator: OperatorShape): Date => {
  const yearShift = operator.y ?? 0;
  const monthShift = operator.m ?? 0;
  const dayShift = operator.d ?? 0;
  return new Date(
    date.getFullYear() + yearShift,
    date.getMonth() + monthShift,
    date.getDate() + dayShift
  );
};
