import Link from "next/link";

interface Props {
   label: string;
   value: string;
   href?: string;
}

export default function InfoItem({ label, value, href }: Props) {
   return (
      <div className="flex flex-col justify-between hover:bg-slate-400/50 dark:hover:bg-slate-700/50 p-1 rounded-sm transition-colors">
         <span className="text-xs text-slate-500">{label}</span>
         {
            href ? ( 
               <Link href={href} className="text-sm dark:text-silver hover:underline cursor-pointer">{value}</Link>
            ) : (
               <span className="text-sm text-silver">{value}</span>
            )
         }
      </div>
   )
}