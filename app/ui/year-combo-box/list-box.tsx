"use client";

import { use } from "react";
import { ListBox, ListBoxItem } from "react-aria-components";

type Props = {
  promise: Promise<{ min: number; max: number }>;
};

const YearListBox = ({ promise }: Props) => {
  const { min, max } = use(promise);

  const years = Array.from({ length: max - min + 1 }, (_, index) => {
    const year = (max - index).toString();

    return {
      id: year,
      name: year,
    };
  });

  return (
    <ListBox items={years} className="flex w-full flex-col outline-hidden">
      {({ name }) => (
        <ListBoxItem className="group text-text hover:text-blue-x600 hover:bg-background focus:text-blue-x600 focus:bg-background flex cursor-pointer items-center rounded-sm px-3 py-2.5 font-(family-name:--font-overpass) text-sm leading-4 font-semibold outline-hidden transition-colors duration-200 ease-in-out select-none">
          {name}
        </ListBoxItem>
      )}
    </ListBox>
  );
};

export default YearListBox;
