interface TitleProps {
  isLoading: boolean;
  title: string;
  description: string;
}

const Loading = () => (
  <div className="max-w-[1000px] space-y-2">
    <div className="skeleton w-full h-[96px]"></div>
    <div className="skeleton w-full h-[33px]"></div>
    <div className="skeleton w-3/4 h-[33px]"></div>
  </div>
);

const Title = ({ isLoading, title, description }: TitleProps) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1000px]">
      <div className="text-[64px] font-domaine font-medium tracking-[-0.01em] text-black">
        {title}
      </div>
      <div className="text-[24px]">{description}</div>
    </div>
  );
};

export default Title;
