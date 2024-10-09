import ReduxProvider from "@/components/providers/redux-provider";
import ThemeProvider from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

const APP_NAME = "Yavir reads";
const APP_DEFAULT_TITLE = "yavirreads";
const APP_TITLE_TEMPLATE = "%s - Yavir reads";
const APP_DESCRIPTION = "Best PWA app in the world!";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
