"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./config";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
