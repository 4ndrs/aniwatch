import Cover from "@/app/ui/cover";

import { AnimeQuery } from "@/app/gql/sdk";
import { FaThumbsUp } from "react-icons/fa";

type Review = NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["reviews"]>["nodes"]
>[number];

type Props = {
  review?: Review;
};

const ReviewCard = ({ review }: Props) => {
  if (!review) {
    return;
  }

  return (
    <article>
      <h3 className="sr-only">Review by {review.user?.name}</h3>

      <div className="flex gap-5">
        <Cover
          size="profile"
          className="shrink-0 rounded-sm"
          src={review.user?.avatar?.medium}
          alt={"Profile picture of " + review.user?.name}
        />

        <p className="bg-foreground-sp relative flex-1 rounded-sm py-[0.8125rem] pr-[1.5625rem] pl-[0.9375rem] text-center after:absolute after:top-3 after:left-[-0.5625rem] after:size-2.5 after:[border-width:6px_9px_6px_0] after:[border-style:solid] after:[border-color:transparent_var(--color-foreground-sp)_transparent_transparent] after:content-['']">
          <span className="text-text text-sm leading-[1.225rem] italic">
            {review.summary}
          </span>

          <span className="text-text-lighter absolute right-2.5 bottom-2.5 flex items-center gap-1 text-[0.8125rem] leading-[0.934375rem]">
            <FaThumbsUp className="size-3" />
            {review.rating}
          </span>
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
