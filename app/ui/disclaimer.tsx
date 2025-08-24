"use client";

import { FaQuestion } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Disclaimer = () => {
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const controller = new AbortController();

    window.addEventListener(
      "pointerdown",
      (event) => {
        const target = event.target as HTMLElement;

        if (
          panelRef.current?.contains(target) ||
          buttonRef.current?.contains(target)
        ) {
          return;
        }

        setOpen(false);
      },
      { signal: controller.signal, passive: true },
    );

    window.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          event.stopPropagation();

          setOpen(false);

          buttonRef.current?.focus();
        }
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, [open]);

  return (
    <div className="fixed right-5 bottom-5">
      <button
        ref={buttonRef}
        aria-label="About AniWatch"
        aria-controls="disclaimer-panel"
        onClick={() => setOpen(!open)}
        className="focus-visible:ring-blue cursor-pointer rounded-full border-gray-700 bg-black/80 p-2 text-xs text-white/80 ring ring-stone-600 ring-offset-1 ring-offset-black backdrop-blur transition-colors duration-200 outline-none hover:bg-stone-600 hover:text-white focus-visible:ring-2"
      >
        <FaQuestion className="size-3" />
      </button>

      <div
        id="disclaimer-panel"
        role="region"
        ref={panelRef}
        data-open={open || undefined}
        aria-label="AniWatch Disclaimer"
        className="absolute right-0 bottom-full mb-2 hidden w-64 rounded-lg bg-black/80 p-3 text-xs text-white/80 shadow-lg backdrop-blur data-open:block"
      >
        <p>
          AniWatch is an unofficial, non-commercial learning project. Data
          provided by the AniList GraphQL API. Not affiliated with or endorsed
          by AniList.
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/4ndrs/aniwatch"
          className="mt-2 block text-right text-blue-400 hover:underline"
        >
          Source Code →
        </a>
      </div>
    </div>
  );
};

export default Disclaimer;
