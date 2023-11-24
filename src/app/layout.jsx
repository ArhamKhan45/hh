import "@/scss/globals.scss";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "TODO APP",
  description: "Generated by Arham Ullah khan in Next.js",
};

// connecting bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BootstrapConnect,
  ContextProvider,
} from "@/components/Clients/AllClients";
import Navbar from "./Header";
import { Suspense } from "react";
import Loading from "./loading.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <BootstrapConnect />
          <ContextProvider>
            <Navbar />
            {children}
          </ContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
