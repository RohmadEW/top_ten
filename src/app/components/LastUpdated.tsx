import { format } from "date-fns";

interface LastUpdatedProps {
  updated_at: string;
}

const Loading = () => <div className="skeleton w-[200px] h-[40px]"></div>;

const LastUpdated = ({ updated_at }: LastUpdatedProps) => {
  return (
    <button className="btn font-bold text-[19px]">
      <span className="tracking-wide">Last Updated:</span>{" "}
      {!updated_at ? (
        <Loading />
      ) : (
        <span className="tracking-wide text-red-500">
          {format(new Date(updated_at), "MMMM, dd yyyy")}
        </span>
      )}
    </button>
  );
};

export default LastUpdated;
