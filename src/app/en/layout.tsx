import { SiteSearch } from "@/components/SiteSearch";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteSearch />
        {children}
      </body>
    </html>
  );
}
