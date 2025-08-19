import { FaStar } from "react-icons/fa";

type Props = {
  rank?: number;
  context?: string;
};

const Rating = ({ rank, context }: Props) => {
  if (rank == null || context == null) {
    return;
  }

  return (
    <p className="bg-foreground-sp relative flex items-center justify-center rounded-[3px] p-2">
      <FaStar className="absolute top-[calc(50%-1px)] left-3 size-3 -translate-y-1/2 text-yellow-500" />

      <span className="text-text text-xs leading-[0.8625rem] font-medium capitalize">
        #{rank} {context}
      </span>
    </p>
  );
};

export default Rating;
