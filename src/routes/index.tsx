import { createFileRoute } from "@tanstack/react-router";

import heroAsset from "@/assets/thattikko-3d.png";

const CONSTRUCTION_TEXT =
  "UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • ";

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
          "Thattikko is currently under construction. We'll be back soon.",
      },
    ],
  }),
  component: Landing,
});

function ConstructionMarquee() {
  return (
    <div className="w-full shrink-0 overflow-hidden bg-secondary py-2.5 sm:py-3">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-base font-bold text-primary sm:text-2xl">
        <span>{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
        <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
      </div>
    </div>
  );
}

function Landing() {
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

      {/* Bottom construction marquee */}
      <ConstructionMarquee />
    </div>
  );
}