import { twMerge } from "tailwind-merge";

type Props = {
  style?: React.ComponentProps<"div">["style"];
  children?: React.ReactNode; // pass children to inherit height from
  className?: string;
};

const Skeleton = ({ style, children, className }: Props) => (
  <div
    aria-hidden
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
