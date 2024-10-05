import Link from "next/link";
import { RxCountdownTimer } from "react-icons/rx";

export default function RecentBox() {
   return (
      <Link href="" className="flex items-center gap-2">
         <RxCountdownTimer />
         <p>Нещодавно</p>
      </Link>
   );
}