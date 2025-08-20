import { twMerge } from "tailwind-merge";

type Props = {
  style?: React.ComponentProps<"div">["style"];
  children?: string; // pass children to inherit height from text
  className?: string;
};

const Skeleton = ({ style, children, className }: Props) => (
  <div
    style={style}
    className={twMerge(
      "size-fit animate-pulse bg-gray-600 text-transparent",
      className,
    )}
  >
    {children}
  </div>
);

export default Skeleton;
