// app/service/page.tsx
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | EPS Services",
  description: "Professional home services including stone restoration, painting, cleaning, repairs, and more.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}