"use client";

import { useRef } from "react";
import { DEBOUNCE_VALUE } from "@/app/ui/utils";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useQueryState, parseAsString, debounce, defaultRateLimit } from "nuqs";

type Props = {
  id?: string;
};

const SearchBar = ({ id }: Props) => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({
      shallow: true,
      history: "push",
      limitUrlUpdates: debounce(DEBOUNCE_VALUE),
    }),
  );

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={({ target }) => {
        const button = (target as HTMLElement)?.closest("button");

        if (button) {
          return;
        }

        inputRef.current?.focus();
      }}
      className="text-text bg-foreground-sp flex items-center gap-3 rounded-md px-4 py-[0.6875rem] font-(family-name:--font-overpass) text-[0.8125rem] leading-[0.934375rem] hover:cursor-text"
    >
      <FaSearch
        aria-hidden
        className="text-gray-x400 pointer-events-none h-4 w-[0.8125rem] shrink-0"
      />

      <input
        id={id}
        ref={inputRef}
        value={search}
        inputMode="search"
        spellCheck={false}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="off"
        onChange={({ target: { value } }) =>
          setSearch(
            value,
            value === ""
              ? {
                  // don't debounce if field is empty
                  limitUrlUpdates: defaultRateLimit,
                }
              : undefined,
          )
        }
        className="ring-blue flex-1 border-none outline-none"
      />

      <button
        disabled={!search}
        aria-label="Clear Search"
        onClick={() => {
          inputRef.current?.focus();
          setSearch("", { limitUrlUpdates: defaultRateLimit });
        }}
        className="text-gray-x400 hover:text-gray-x500 ring-blue focus-visible:text-gray-x500 shrink-0 cursor-pointer rounded-sm ring-offset-2 ring-offset-transparent transition-colors duration-200 outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-0"
      >
        <FaTimes className="size-4" />
      </button>
    </div>
  );
};

export default SearchBar;
