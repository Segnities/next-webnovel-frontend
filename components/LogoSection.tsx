import { FaOctopusDeploy } from "react-icons/fa";

export default function LogoSection() {
   return (
      <section className="flex items-center gap-4 cursor-pointer">
         <FaOctopusDeploy className="text-2xl"/>
         <h1>{"renovel lib".toUpperCase()}</h1>
      </section>
   );
}