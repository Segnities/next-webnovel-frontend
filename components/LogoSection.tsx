import { FaOctopusDeploy } from "react-icons/fa";

export default function LogoSection() {
   return (
      <section className="flex items-center gap-4 cursor-pointer">
         <FaOctopusDeploy className="lg:text-2xl text-3xl"/>
         <h1 className="hidden lg:block">{"renovel lib".toUpperCase()}</h1>
      </section>
   );
}