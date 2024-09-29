
import Image from "next/image";

export default function BookImg() {
   return (
      <div>
         <div className="relative lg:w-60 lg:h-80 w-40 h-60">
         <Image
            src={"https://cover.imglib.info/uploads/cover/fff-class-trashero-novel/cover/wj4FW2qxvwr5_250x350.jpg"}
            alt={"fff-class-trashero-novel"}
            quality={100}
            fill={true}
            className="w-full h-full object-cover rounded-md"
         />
         </div>
      </div>
   )
}