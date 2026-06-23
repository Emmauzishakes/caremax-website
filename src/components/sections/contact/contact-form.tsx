export function ContactForm() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Send us a message
        </h2>

        <form className="mt-10 space-y-6">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border px-4 py-2 text-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-xl border px-4 py-2 text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm font-medium">Subject</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border px-4 py-2 text-sm"
              placeholder="Demo request / Pricing / Support"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-xl border px-4 py-2 text-sm"
              placeholder="Tell us about your pharmacy needs..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-600 py-3 text-white text-sm font-medium hover:bg-teal-700"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}