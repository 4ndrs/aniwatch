"use client";

import { useQueryState } from "nuqs";
import { useCallback, useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { Input, Button, Popover, ComboBox } from "react-aria-components";

type Props = {
  children: React.ReactNode;
  "aria-labelledby": string;
};

const EMPTY_VALUE = "Any";

const YearComboBox = ({ children, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [boxWidth, setBoxWidth] = useState(0);
  const [inputValue, setInputValue] = useState(EMPTY_VALUE);

  const [selectedKey, setSelectedKey] = useQueryState("year", {
    shallow: true,
    history: "push",
  });

  const observeWidth = useCallback((ref: HTMLElement | null) => {
    if (!ref) {
      return;
    }

    const observer = new ResizeObserver((entries) =>
      setBoxWidth(entries[0].target.clientWidth),
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, []);

  return (
    <ComboBox
      ref={observeWidth}
      allowsEmptyCollection
      inputValue={inputValue}
      selectedKey={selectedKey}
      aria-labelledby={rest["aria-labelledby"]}
      onInputChange={(value) => setInputValue(value)}
      onBlur={() => {
        setIsOpen(false);
        setInputValue(selectedKey?.toString() ?? EMPTY_VALUE);
      }}
      onFocus={() => {
        setIsOpen(true);
        setInputValue("");
      }}
      onSelectionChange={(key) => {
        setIsOpen(false);
        setSelectedKey(key?.toString() || null);
        setInputValue(key?.toString() ?? EMPTY_VALUE);
      }}
      className="text-text bg-foreground-sp flex items-center gap-3 rounded-md px-4 py-[0.6875rem] font-(family-name:--font-overpass) text-[0.8125rem] leading-[0.934375rem] hover:cursor-text"
    >
      <Input
        data-selected={inputValue === selectedKey || undefined}
        className="ring-blue data-selected:text-blue-x600 min-w-0 flex-1 border-none outline-none data-selected:font-semibold"
      />

      <Button
        aria-label={selectedKey ? "Clear Selected Year" : undefined}
        onPress={() => {
          if (selectedKey) {
            setInputValue("");
            setSelectedKey(null);
          } else {
            setIsOpen(true);
          }
        }}
        className="text-gray-x400 hover:text-gray-x500 ring-blue focus-visible:text-gray-x500 shrink-0 cursor-pointer rounded-sm ring-offset-2 ring-offset-transparent transition-colors duration-200 outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-0"
      >
        {selectedKey ? (
          <FaTimes className="size-4" />
        ) : (
          <FaChevronDown className="size-4" />
        )}
      </Button>

      <Popover
        offset={16}
        isOpen={isOpen}
        crossOffset={-16}
        style={
          {
            "--box-width": boxWidth + "px",
          } as React.CSSProperties
        }
        className="data-entering:animate-in data-entering:fade-in data-exiting:animate-out data-exiting:fade-out bg-foreground-sp max-h-[31.25rem] w-(--box-width) overflow-auto rounded-md p-2.5"
      >
        {children}
      </Popover>
    </ComboBox>
  );
};

export default YearComboBox;
