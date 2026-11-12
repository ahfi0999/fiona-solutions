import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { productPages } from "@/content/products";

const product = productPages["verifi-ai"];

export const metadata: Metadata = { title: product.metaTitle };

export default function Page() {
  return <ProductPage product={product} />;
}
