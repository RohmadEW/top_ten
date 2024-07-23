interface LastUpdatedProps {
  updated_at: string;
}

const LastUpdated = ({ updated_at }: LastUpdatedProps) => {
  return (
    <button className="btn font-bold text-[19px]">
      <span className="tracking-wide">Last Updated:</span>{" "}
      <span className="tracking-wide text-red-500">{updated_at}</span>
    </button>
  );
};

export default LastUpdated;
