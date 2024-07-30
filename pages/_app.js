// import "@/styles/globals.css";
// import Sidebar from "@/components/Sidebar";

// // export default function App({ Component, pageProps }) {
// //   return(
// //     <Sidebar>
// //     <Component {...pageProps} />
// //     </Sidebar>
// //   );

// // }

// import "../styles/globals.css";
// // import type { AppProps } from "next/app";
// import { ThemeProvider } from "next-themes";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//     <ThemeProvider defaultTheme="system" attribute="class">
//     <Sidebar>
//      <Component {...pageProps} />
//     </Sidebar>
//     </ThemeProvider>
    
    
//     </>
//   );
// }

// export default MyApp;

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="dark:bg-gray-900 bg-white text-gray-800 dark:text-gray-200 min-h-screen">
        <Header />
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
