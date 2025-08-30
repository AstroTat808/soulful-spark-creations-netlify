export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="max-w-3xl mx-auto px-6 pt-14 pb-8 text-center">
        <h1 className="font-display text-5xl text-smokyplum">Contact</h1>
        <p className="mt-3 opacity-85">
          Questions about a download or a custom request? Send a note—Shaun will get back to you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact/success"
          className="bg-white rounded-2xl p-6 md:p-8 shadow-soft ring-1 ring-smokyplum/10 grid gap-5"
        >
          {/* Netlify form requirements */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Your name</label>
              <input name="name" required className="w-full px-4 py-3 rounded-xl ring-1 ring-smokyplum/15 focus:outline-none focus:ring-2 focus:ring-sage bg-ivory" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl ring-1 ring-smokyplum/15 focus:outline-none focus:ring-2 focus:ring-sage bg-ivory" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" required rows={6} className="w-full px-4 py-3 rounded-xl ring-1 ring-smokyplum/15 focus:outline-none focus:ring-2 focus:ring-sage bg-ivory"></textarea>
          </div>

          <label className="inline-flex items-start gap-3 text-sm opacity-85">
            <input type="checkbox" name="consent" value="yes" className="mt-1" />
            You may email me occasionally about new releases and guides. You can unsubscribe anytime.
          </label>

          <div className="flex items-center gap-3 pt-2">
            <button type="submit" className="px-5 py-3 rounded-xl bg-sage hover:bg-sagedeep text-white shadow-soft">Send</button>
            <a href="/" className="px-5 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white hover:bg-ivory">Return to Home</a>
          </div>

          <noscript>
            <p className="text-sm opacity-75">This form works without JavaScript. After submitting, you’ll see a confirmation page.</p>
          </noscript>
        </form>
      </section>
    </main>
  );
}
