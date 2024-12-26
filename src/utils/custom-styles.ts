export const defineProjectCardBG = (index: number): string => {
  const remainderOfDivision = (index + 1) % 6;

  if (remainderOfDivision === 1) {
    return 'bg-from-dark-violet-to-light-yellow';
  } else if  (remainderOfDivision === 2) {
    return 'bg-from-light-violet-to-dark-yellow';
  } else if (remainderOfDivision === 3) {
    return 'bg-from-yellow-to-violet';
  } else if (remainderOfDivision === 4) {
    return 'bg-from-violet-to-yellow';
  } else if (remainderOfDivision === 5) {
    return 'bg-from-green-to-yellow';
  } else {
    return 'bg-from-yellow-to-green';
  }
};
