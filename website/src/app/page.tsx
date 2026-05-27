import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl leading-tight">
            Your weekly digest for the AI tools that actually matter.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-light sm:text-xl">
            New AI tools drop every week. We read through the noise so you
            don&apos;t have to. One tool, one page, every week so you
            stay in the loop without feeling overwhelmed.
          </p>
          <a
            href="#subscribe"
            className="mt-8 inline-block rounded-lg bg-warm-yellow px-8 py-3.5 font-medium text-navy transition-colors hover:bg-warm-yellow/80"
          >
            Get the next one-pager
          </a>
        </div>
      </section>

      {/* Featured Flyer */}
      <section className="bg-lavender py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-lavender-dark">
            Issue No. 01
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            <a
              href="https://notebooklm.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline underline-offset-4 decoration-lavender-dark/30 hover:decoration-lavender-dark transition-colors"
            >
              NotebookLM
            </a>
          </h2>
          <p className="mt-2 text-navy-light">
            Google&apos;s AI research assistant. What it does, how to use it,
            and why it matters for faculty.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/flyer1.png"
              alt="One-pager on NotebookLM, a practical guide for faculty"
              width={800}
              height={1035}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {[
              {
                step: "01",
                title: "Read the one-pager",
                description:
                  "Each issue covers one AI tool in a single, scannable page. Built for busy faculty.",
              },
              {
                step: "02",
                title: "Subscribe for more",
                description:
                  "Get the next one-pager delivered straight to your inbox. No spam, ever.",
              },
              {
                step: "03",
                title: "Book a walkthrough",
                description:
                  "Want hands-on help? Schedule a free 1-on-1 session to see the tool in action.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <p className="text-4xl font-bold text-lavender-dark/30">
                  {item.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-lavender/40 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            About The AI Desk
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-light">
            I&apos;m{" "}
            <strong className="text-navy">Pratik Dhakal</strong>, and I created
            The AI Desk to bridge the gap between AI hype and practical academic
            use. Every one-pager is written to respect your time and your
            intelligence.
          </p>
          <a
            href="https://www.linkedin.com/in/pdhakal94/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-medium text-lavender-dark underline underline-offset-4 transition-colors hover:text-navy"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mt-4 text-lg text-navy-light">
            Get each new one-pager delivered to your inbox. No spam, no
            fluff. Unsubscribe anytime.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdd3kNg1UiiEgX58dvjRxr7KB9_mQH7F1LHin9PODJRc7neNg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-warm-yellow px-8 py-3.5 font-medium text-navy transition-colors hover:bg-warm-yellow/80"
          >
            Subscribe
          </a>
        </div>
      </section>

      {/* Walkthrough Booking */}
      <section className="bg-lavender px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Prefer a walkthrough?
          </h2>
          <p className="mt-4 text-lg text-navy-light">
            Book a free 1-on-1 session and I&apos;ll walk you through any tool
            covered on The AI Desk.
          </p>
          <a
            href="https://cal.com/pat-dha-ojma8y"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-warm-yellow px-8 py-3.5 font-medium text-navy transition-colors hover:bg-warm-yellow/80"
          >
            Book a walkthrough
          </a>
          <p className="mt-3 text-sm text-navy-light/60">
            Powered by Cal.com &middot; Pick a time that works for you
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/5 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm text-navy-light/60 sm:flex-row">
          <p>The AI Desk · aiyellowpage.online</p>
          <a
            href="https://www.linkedin.com/in/pdhakal94/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-navy"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
