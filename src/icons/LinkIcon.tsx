interface LinkIconProps {
  dark?: boolean;
};

const LinkIcon = ({ dark }: LinkIconProps) => {
  if (dark) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.9165 4.58325H15.4165V12.0833" stroke="black" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
        <path d="M4.81006 15.1899L15.4166 4.58325" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.91675 4.5835H15.4167V12.0835" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M4.81006 15.1901L15.4166 4.5835" stroke="white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default LinkIcon;
