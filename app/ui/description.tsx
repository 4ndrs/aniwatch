import parse from "html-react-parser";
import Skeleton from "@/app/ui/skeleton";

type Props = {
  title?: string | null;
  description?: string | null;
};

const Description = ({ title, description }: Props) => (
  <div>
    <h1 className="text-text text-[1.1875rem] leading-[1.365625rem]">
      {title ?? "No title"}
    </h1>
    <p className="text-text-light hover:text-text py-[0.9375rem] text-sm leading-[1.3125rem] transition-colors duration-200">
      {parse(description ?? "No description available")}
    </p>
  </div>
);

export const DescriptionSkeleton = () => (
  <div className="flex flex-col">
    <Skeleton className="text-[1.1875rem] leading-[1.365625rem]">
      Sousou no Frieren
    </Skeleton>

    <div className="flex flex-col gap-1 py-[0.9375rem] text-sm leading-[1.3125rem]">
      <Skeleton className="w-full">Description</Skeleton>
      <Skeleton className="w-full">Description</Skeleton>
      <Skeleton className="w-full">Description</Skeleton>
      <Skeleton className="w-full">Description</Skeleton>
      <Skeleton>Description</Skeleton>
    </div>
  </div>
);

export default Description;
