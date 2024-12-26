export const previewsList = [
  {
    alignCenter: true,
    isVertical: false,
    bg: 'bg-from-yellow-to-violet',
  },
  {
    alignCenter: false,
    isVertical: false,
    bg: 'bg-from-light-violet-to-dark-yellow',
  },
  {
    alignCenter: false,
    isVertical: true,
    bg: 'bg-from-dark-violet-to-light-yellow',
  },
  {
    alignCenter: true,
    isVertical: false,
    bg: 'bg-from-green-to-yellow',
  },
];

export const definePositionForPreviewImages = ({
  alignCenter,
  isVertical,
  index,
}: {
  alignCenter: boolean;
  isVertical: boolean;
  index: number;
}): string => {
  let classNames = ['flex'];

  if (alignCenter) {
    classNames.push('justify-center');
  } else if (!alignCenter && !isVertical && index === 1) {
    classNames.push('justify-start');
  } else if (!alignCenter && !isVertical && index !== 1) {
    classNames.push('justify-end');
  } else if (!alignCenter && isVertical && index === 1) {
    classNames.push('items-start');
  } else if (!alignCenter && isVertical && index !== 1) {
    classNames.push('items-end');
  }

  return classNames.join(' ');
};
