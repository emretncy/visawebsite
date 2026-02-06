"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Sık sorulan sorular
        </h2>
        <p className="mt-2 text-muted">
          Vize süreci hakkında kısa yanıtlar
        </p>
        <ul className="mt-8 space-y-2">
          {site.homeFaq.map((item, index) => (
            <li
              key={index}
              className="rounded-lg border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-foreground hover:bg-background/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                {item.question}
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-4 py-3 text-sm text-muted">
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
