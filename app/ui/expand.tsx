"use client";

import { twMerge } from "tailwind-merge";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Expand = ({ children, className }: Props) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      data-expand={expand || undefined}
      className={twMerge("group relative", className)}
    >
      <p
        ref={(ref) => {
          if (!ref) {
            return;
          }

          // detect if the line-clamp is active
          const isClamped = ref.scrollHeight > ref.clientHeight;

          // if it's not, it means that the text is already expanded
          if (!isClamped) {
            setExpand(true);
          }
        }}
        className="text-text-light hover:text-text line-clamp-5 text-sm leading-[1.3125rem] transition-colors duration-200 group-data-[expand]:line-clamp-none"
      >
        {children}
      </p>

      <button
        onClick={() => setExpand(true)}
        className="text-text-lighter from-foreground-sp to-foreground-sp/30 absolute inset-x-0 bottom-0 cursor-pointer bg-gradient-to-t pt-5 pb-[0.3125rem] text-center text-sm leading-4 font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[expand]:hidden"
      >
        Read More
      </button>
    </div>
  );
};

export default Expand;
