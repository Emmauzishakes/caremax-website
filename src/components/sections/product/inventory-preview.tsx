const inventory = [
  { name: "Paracetamol 500mg", stock: 120, status: "In Stock" },
  { name: "Amoxicillin 250mg", stock: 18, status: "Low Stock" },
  { name: "Vitamin C Tablets", stock: 0, status: "Out of Stock" },
];

export function InventoryPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Inventory Management
        </h2>

        <p className="text-center text-muted-foreground mt-2">
          Track stock levels, expiry dates, and availability in real time.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="p-4">Medicine</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item) => (
                <tr key={item.name} className="border-t">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.stock}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}