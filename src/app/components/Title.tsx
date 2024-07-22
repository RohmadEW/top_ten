interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
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
