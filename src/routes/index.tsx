import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/labdrop/site-chrome";
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

function Landing() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[calc(100vh-150px)] w-full max-w-6xl flex-col items-center px-5 py-10 text-center sm:py-16">
        {/* Main THATTIKKO hero */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <img
            src={heroAsset}
            alt="തട്ടിക്കോ.fun"
            className="w-full max-w-3xl select-none"
            draggable={false}
          />

          <p className="-mt-1 text-lg font-bold text-primary sm:text-2xl">
            Don't log in. Just{" "}
            <span className="relative inline-block">
              Thattikko.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[4px] w-[86%] rounded-full bg-brand-red"
              />
            </span>
          </p>
        </div>

        {/* Temporary construction marquee */}
        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden bg-secondary py-3">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-xl font-bold text-primary sm:text-2xl">
            <span>{CONSTRUCTION_TEXT}</span>
            <span aria-hidden="true">{CONSTRUCTION_TEXT}</span>
          </div>
        </div>
      </section>
    </PageShell>
  );
}