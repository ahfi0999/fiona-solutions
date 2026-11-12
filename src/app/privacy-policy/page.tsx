import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicyHtml } from "@/content/legal";

export const metadata: Metadata = { title: "Privacy Policy - Fiona Solutions" };

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" html={privacyPolicyHtml} />;
}
