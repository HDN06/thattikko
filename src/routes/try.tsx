import { createFileRoute } from "@tanstack/react-router";

import backgroundPattern from "@/assets/thattikko-pattern.png";

const TRY_SITE_URL = "https://thattikko.lovable.app/";

export const Route = createFileRoute("/try")({
  head: () => ({
    meta: [
      {
        title: "തട്ടിക്കോ.fun",
      },
      {
        name: "description",
        content: "While we fix things, use this.",
      },
      {
        name: "robots",
        content: "noindex, nofollow, noarchive",
      },
    ],
  }),
  component: TryPage,
});

function TryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#017511]">
      {/* Blurred THATTIKKO pattern */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 scale-105 bg-cover bg-center blur-[3px]"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
        }}
      />

      {/* Softens the pattern slightly */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/10"
      />

      {/* Center */}
      <div className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-6">
        <section
          className="
            relative
            w-full
            max-w-[500px]
            overflow-hidden
            rounded-[30px]
            border
            border-white/55
            bg-[#FFC300]/70
            px-7
            py-10
            text-center
            shadow-[0_25px_80px_rgba(0,0,0,0.20)]
            backdrop-blur-2xl
            sm:px-12
            sm:py-12
          "
        >
          {/* Glass reflection */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[30px]
              bg-gradient-to-br
              from-white/35
              via-white/5
              to-white/10
            "
          />

          {/* Glass top edge */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-0
              h-px
              bg-white/80
            "
          />

          {/* Content */}
          <div className="relative">
            {/* Brand */}
            <p className="font-display text-xl font-black tracking-tight text-[#017511] sm:text-2xl">
              തട്ടിക്കോ
              <span className="text-[#FF2B2B]">.</span>
              fun
            </p>

            {/* Red brand accent */}
            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-1 w-10 rounded-full bg-[#FF2B2B]"
            />

            {/* Main message */}
            <h1 className="mt-7 font-sans text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl">
              While we fix things,
              <br />
              <span className="text-[#017511]">use this.</span>
            </h1>

            {/* Minimal copy */}
            <p className="mx-auto mt-5 max-w-xs text-sm font-medium leading-relaxed text-black/60 sm:text-base">
              The temporary THATTIKKO is ready.
            </p>

            {/* CTA */}
            <a
              href={TRY_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-8
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border-2
                border-[#017511]
                bg-[#017511]
                px-6
                py-4
                font-display
                text-sm
                font-black
                tracking-wide
                text-white
                shadow-[0_8px_20px_rgba(1,117,17,0.18)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-black
                hover:bg-[#FFC300]
                hover:text-black
                hover:shadow-[0_12px_25px_rgba(0,0,0,0.14)]
                active:translate-y-0
              "
            >
              <span>OPEN THATTIKKO</span>

              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Tagline */}
            <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.25em] text-black/35 sm:text-[10px]">
              Don&apos;t log in. Just Thattikko.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}