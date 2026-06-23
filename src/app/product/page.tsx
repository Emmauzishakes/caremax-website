import { ProductHero } from "@/components/sections/product/product-hero";
import { DashboardPreview } from "@/components/sections/product/dashboard-preview";
import { InventoryPreview } from "@/components/sections/product/inventory-preview";
import { POSPreview } from "@/components/sections/product/pos-preview";
import { ProductCTA } from "@/components/sections/product/product-cta";

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <DashboardPreview />
      <InventoryPreview />
      <POSPreview />
      <ProductCTA />
    </>
  );
}