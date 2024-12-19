export const defineProjectCardBG = (index: number): string => {
  const remainderOfDivision = (index + 1) % 6;

  if (remainderOfDivision === 1) {
    return'bg-[linear-gradient(70.4deg,_#CECDFD_2.34%,_#FAF0F3_88.94%)]';
  } else if  (remainderOfDivision === 2) {
    return 'bg-[linear-gradient(70.4deg,_#F6E6F3_21.58%,_#FFF5DE_98.56%)]';
  } else if (remainderOfDivision === 3) {
    return 'bg-[linear-gradient(70.4deg,_#FBEFE6_2.34%,_#D1CFFE_98.56%)]';
  } else if (remainderOfDivision === 4) {
    return 'bg-[linear-gradient(70.4deg,_#EEDDFE_2.34%,_#FAF0F2_98.56%)]';
  } else if (remainderOfDivision === 5) {
    return 'bg-[linear-gradient(70.4deg,_#CFFEFB_2.34%,_#F7FFDE_98.56%)]';
  } else {
    return 'bg-[linear-gradient(70.4deg,_#FFF5DE_2.34%,_#E6F2F6_69.7%)]';
  }
};
