import Header from "@/components/header";
import Footer from "@/components/ui/footer";

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