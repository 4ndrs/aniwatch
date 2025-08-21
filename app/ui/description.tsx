import parse from "html-react-parser";
import Expand from "@/app/ui/expand";
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

    <Expand className="py-[0.9375rem]">
      {parse(description ?? "No description available")}
    </Expand>
  </div>
);

export const DescriptionSkeleton = () => (
  <div className="flex flex-col">
    <Skeleton className="text-[1.1875rem] leading-[1.365625rem]">
      Sousou no Frieren
    </Skeleton>

    <div className="flex flex-col gap-1 py-[0.9375rem] text-sm leading-[1.3125rem]">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="w-full">
          Description
        </Skeleton>
      ))}
      <Skeleton>Some random description line here</Skeleton>
    </div>
  </div>
);

export default Description;
