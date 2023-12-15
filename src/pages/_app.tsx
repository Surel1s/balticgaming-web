import "@/styles/globals.css";
import "@/styles/button.css";
import "@/styles/Sidebar.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#191c1e]">
      <Component {...pageProps} />
    </div>
  );
}
