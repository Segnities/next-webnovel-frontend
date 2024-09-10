import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export default function CatalogLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}