
"use client";
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#4E3B4F]/15 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl text-[#4E3B4F]">Get the free mini‑planner</h3>
          <p className="mt-2 text-sm text-[#2A2329]/80">
            Join the list for tips, templates, and early access to new downloads.
          </p>
        </div>

        {/* Netlify form */}
        <form name="mini-planner" method="POST" data-netlify="true" netlify-honeypot="bot-field"
          className="bg-white rounded-xl p-4 ring-1 ring-[#4E3B4F]/10 shadow-soft">
          <input type="hidden" name="form-name" value="mini-planner" />
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <input name="name" type="text" placeholder="Name"
              className="px-3 py-2 rounded-lg ring-1 ring-[#4E3B4F]/15 focus:outline-none focus:ring-2 focus:ring-[#A8B7A6]" />
            <input name="email" type="email" required placeholder="Email"
              className="px-3 py-2 rounded-lg ring-1 ring-[#4E3B4F]/15 focus:outline-none focus:ring-2 focus:ring-[#A8B7A6]" />
            <button className="bg-[#A8B7A6] hover:bg-[#7E9284] text-white rounded-lg px-4 py-2 shadow-soft">
              Send me the PDF
            </button>
          </div>
          <p className="mt-2 text-xs text-[#2A2329]/60">We’ll email a link to download after submission.</p>
        </form>
      </div>
    </footer>
  );
}
