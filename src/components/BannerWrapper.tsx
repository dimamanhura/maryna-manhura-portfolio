interface BannerWrapperProps {
  children: React.ReactElement | React.ReactElement[]; 
};

const BannerWrapper = ({ children }: BannerWrapperProps) => {
  return (
    <div className="bg-[#DEE3FF] py-16 px-20 rounded-3xl mb-16">
      {children}
    </div>
  );
};

export default BannerWrapper;
