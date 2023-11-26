// using context providers - react context is not supported in Server components. so we have to wrap the context provider in a client component e.g., theme-provider.tsx and then import it into this server component

import React from "react";
import ThemeProvider from "./1c-theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
