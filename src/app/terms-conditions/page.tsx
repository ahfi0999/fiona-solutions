import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsHtml } from "@/content/legal";

export const metadata: Metadata = { title: "Terms & Conditions - Fiona Solutions" };

export default function TermsConditions() {
  return <LegalPage title="Terms & Conditions" html={termsHtml} />;
}
