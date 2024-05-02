import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "react-hot-toast";

faConfig.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>
  );
}
