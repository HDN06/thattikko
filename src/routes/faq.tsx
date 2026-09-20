import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageShell } from "@/components/labdrop/site-chrome";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — തട്ടിക്കോ.fun" },
      {
        name: "description",
        content:
          "Answers about THATTIKKO.FUN, temporary sessions, file transfers, pairing codes and shared computers.",
      },
      {
        property: "og:title",
        content: "FAQ — തട്ടിക്കോ.fun",
      },
      {
        property: "og:description",
        content:
          "Got questions? Let's Thattikko them.",
      },
    ],
  }),
  component: Faq,
});

const QA = [
  {
    q: "What is THATTIKKO?",
    a: "THATTIKKO is a simple, temporary way to send files, images, text and code from your phone to a computer without logging into a personal account.",
  },
  {
    q: "Do I need an account?",
    a: "Nope. There is no signup, email or password anywhere in the flow. Just create a session and Thattikko.",
  },
  {
    q: "What's this 6-digit code for?",
    a: "The code temporarily pairs one phone with one computer. Once the computer connects, the pairing code is no longer usable.",
  },
  {
    q: "How long does my session stay alive?",
    a: "You can choose 5, 15, 30 or 60 minutes. One hour is the maximum, and the session expires automatically even if you close the browser.",
  },
  {
    q: "What happens to my files after the session?",
    a: "When you end the session or it expires, the temporary transfers, stored files and session data are cleaned up. Nothing is kept for later.",
  },
  {
    q: "How big can a file be?",
    a: "Files can be up to 25 MB each. Images, PDFs, documents, ZIP files and common source files are supported.",
  },
  {
    q: "Can someone guess my code?",
    a: "Repeated incorrect attempts are rate-limited, and the pairing code stops working once a computer successfully connects to the session.",
  },
  {
    q: "Is THATTIKKO end-to-end encrypted?",
    a: "No. We don't claim end-to-end encryption. Content is transferred over HTTPS and temporary data is removed when the session ends or expires.",
  },
  {
    q: "Can I use this on a college lab PC?",
    a: "Absolutely. That's one of the main reasons THATTIKKO exists. You don't need to sign into your personal Google, WhatsApp or other accounts on a shared computer.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">
            FAQ
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Got questions?
          </h1>

          <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
            Let's Thattikko them.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          {QA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-xl border-2 border-primary transition-colors ${
                  isOpen ? "bg-primary/[0.04]" : "bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-bold text-primary sm:text-lg">
                    {item.q}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary font-mono text-xl font-bold text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t-2 border-primary/15 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground sm:px-6 sm:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 border-t-2 border-primary/20 pt-10 text-center">
          <p className="text-lg font-bold text-primary sm:text-xl">
            Still got questions?
          </p>

          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Just give it a Thattikko.
          </p>

          <a
            href="/session"
            className="mt-6 inline-flex rounded-lg bg-primary px-8 py-3 font-display text-lg tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            CREATE SESSION
          </a>
        </div>
      </section>
    </PageShell>
  );
}
