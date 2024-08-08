import HeaderContentLg from "./UI/HeaderContentLg";
import HeaderContentMd from "./UI/HeaderContentMd";

export default function Header() {
   return (
      <header className="dark:bg-gunmetal dark:text-silver w-full h-16 flex items-center justify-around bg-white shadow-md lg:shadow-lg border-slate-100/35 absolute bottom-0  lg:relative lg:top-0">
         <>
            <HeaderContentLg />
            <HeaderContentMd />
         </>
      </header>
   )
}