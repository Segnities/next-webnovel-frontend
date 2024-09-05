import Header from "@/components/Header";
import Footer from "@/components/UI/Footer";

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