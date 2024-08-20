export default function ContainerOffset({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
      <section className="dark:bg-eerieBlack bg-white w-full rounded-lg p-4">
         {children}
      </section>
   )
}