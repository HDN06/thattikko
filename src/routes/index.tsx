import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroAsset from "@/assets/thattikko-3d.png";
import constructionImage from "@/assets/construction-3d.png";

const CONSTRUCTION_TEXT =
  "UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • ";

const POPUP_STORAGE_KEY = "thattikko-maintenance-popup-seen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "തട്ടിക്കോ.fun — Under Construction" },
      {
        name: "description",
        content:
          "Thattikko is currently under construction. Don't log in. Just Thattikko.",
      },
      {
        property: "og:title",
        content: "തട്ടിക്കോ.fun — Under Construction",
      },
      {
        property: "og:description",
        content:
          "Thattikko is getting a little maintenance makeover. We'll be back soon.",
      },
    ],
  }),
  component: Landing,
});

function ConstructionMarquee() {
  return (
    <div className="w-full shrink-0 overflow-hidden bg-[#FFC300] py-2.5 sm:py-3">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-base font-bold text-[#017511] sm:text-2xl">
        <span>{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
      </div>
    </div>
  );
}

function MaintenancePopup({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 py-6 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="maintenance-title"
        className="relative w-full max-w-md border-2 border-black bg-background p-6 shadow-[7px_7px_0_0_#000] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close maintenance message"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-xl font-black text-primary transition-transform hover:rotate-6"
        >
          ×
        </button>

        {/* Accent */}
        <div
          aria-hidden="true"
          className="mb-5 h-2 w-16 bg-secondary"
        />

        <h2
          id="maintenance-title"
          className="pr-8 font-display text-2xl font-black uppercase leading-tight text-primary sm:text-3xl"
        >
          Oops. Maintenance time.
        </h2>

        <p className="mt-5 text-sm font-medium leading-relaxed text-foreground sm:text-base">
          We&apos;re doing some Thattikko magic behind the scenes.
        </p>

        <p className="mt-3 text-sm font-medium leading-relaxed text-foreground sm:text-base">
          The app will be back live once we&apos;re done kicking the bugs out.
        </p>

        <p className="mt-4 text-sm font-bold text-primary">
          Don&apos;t log in yet. We&apos;re almost ready.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-7 w-full border-2 border-black bg-primary px-6 py-3 font-display text-base font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          GOT IT
        </button>
      </div>
    </div>
  );
}

function Landing() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(POPUP_STORAGE_KEY);

    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setShowPopup(true);
      }, 400);

      return () => window.clearTimeout(timer);
    }
  }, []);

  function closePopup() {
    sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    setShowPopup(false);
  }

  return (
    <div className="flex h-[100svh] min-h-[100svh] flex-col overflow-hidden bg-background">
      {/* Top construction marquee */}
      <ConstructionMarquee />

      {/* Hero */}
      <main className="flex min-h-0 flex-1 flex-col">
        <section className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-4 text-center sm:mx-auto sm:w-full sm:max-w-6xl sm:px-5 sm:py-16">
          <img
            src={heroAsset}
            alt="തട്ടിക്കോ.fun"
            className="h-auto max-h-[55svh] w-[88vw] max-w-3xl select-none object-contain sm:max-h-none sm:w-full"
            draggable={false}
          />

          <p className="mt-1 text-base font-bold text-primary sm:-mt-1 sm:text-2xl">
            Don&apos;t log in. Just{" "}
            <span className="relative inline-block">
              Thattikko.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-[86%] rounded-full bg-brand-red sm:h-[4px]"
              />
            </span>
          </p>
        </section>
      </main>
      <img
        src={constructionImage}
        alt="Under construction"
        className="fixed bottom-[57px] right-4 md:right-8 w-24 md:w-32 lg:w-36 z-40 pointer-events-none"
      />
      {/* Bottom construction marquee */}
      <ConstructionMarquee />

      {/* Maintenance popup */}
      {showPopup && <MaintenancePopup onClose={closePopup} />}
    </div>
  );
}