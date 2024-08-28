export default function ContainerOffset({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
      <div className="dark:bg-eerieBlack bg-white w-full rounded-lg p-4 my-2">
         {children}
      </div>
   )
}