export function POSPreview() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Point of Sale System
        </h2>

        <p className="text-center text-muted-foreground mt-2">
          Fast billing workflow optimized for pharmacy environments.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Left - Product list */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold mb-4">Cart Preview</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Paracetamol</span>
                <span>KES 50</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Amoxicillin</span>
                <span>KES 120</span>
              </div>

              <div className="flex justify-between pt-2 font-semibold">
                <span>Total</span>
                <span>KES 170</span>
              </div>
            </div>
          </div>

          {/* Right - Checkout mock */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold mb-4">Checkout</h3>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div>Customer: Walk-in</div>
              <div>Payment: Cash / M-Pesa</div>
              <div>Status: Ready for payment</div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-teal-600 py-2 text-white text-sm">
              Complete Sale
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}