export default function Footer() {
  return (
    <footer className="mt-16 border-t border-smokyplum/10 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4 items-start">
        <div className="md:col-span-2">
          <img src="/images/logo@200.png" alt="Soulful Spark Creations" className="h-10 mb-3" />
          <p className="opacity-80 max-w-md">
            Romantic, practical tools to plan with calm & confidence.
          </p>
          <div className="flex gap-3 mt-4">
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg ring-1 ring-smokyplum/10 hover:bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            </a>
            <a aria-label="Pinterest" href="https://pinterest.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg ring-1 ring-smokyplum/10 hover:bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 3 5.75 3 10.2c0 3.2 1.9 5 3 5 .47 0 .74-1.3.74-1.66 0-.44-1.1-1.35-1.1-3.15 0-3.73 2.86-6.35 6.7-6.35 3.25 0 5.53 1.85 5.53 5.25 0 2.53-1.04 7.31-4.4 7.31-1.21 0-2.24-.87-1.93-2.12.35-1.49 1.02-3.1 1.02-4.18 0-.97-.52-1.78-1.6-1.78-1.27 0-2.28 1.32-2.28 3.08 0 1.12.38 1.88.38 1.88l-1.52 6.4c-.45 1.89-.07 4 .06 4.22.09.14.18.12.27-.06.34-.7 2.1-3.5 2.44-4.69.17-.6.86-3.09.86-3.09.42.82 1.64 1.55 2.95 1.55 3.88 0 6.52-3.87 6.52-9.07C20.7 5.2 17.1 2 12.04 2z"/></svg>
            </a>
            <a aria-label="Email" href="/contact" className="p-2 rounded-lg ring-1 ring-smokyplum/10 hover:bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5L4 6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-smokyplum mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="/downloads">Downloads</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
            <li><a className="hover:underline" href="/styleguide">Styleguide</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-smokyplum mb-3">Get the mini-planner</h3>
          <form name="newsletter" method="POST" data-netlify="true" action="/success" className="space-y-3">
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="email" required name="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white" />
            <button className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft w-full">Subscribe</button>
            <p className="text-xs opacity-70">We’ll send a confirmation email—your download arrives after you confirm.</p>
          </form>
        </div>
      </div>

      <div className="border-t border-smokyplum/10 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Soulful Spark Creations. All rights reserved.
      </div>
    </footer>
  );
}
