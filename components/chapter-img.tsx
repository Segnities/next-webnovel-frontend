import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from "@/components/ui/avatar"

export default function ChapterImg() {
   return (
      <Avatar>
         <AvatarImage
            src="https://cover.imglib.info/uploads/cover/fff-class-trashero-novel/cover/wj4FW2qxvwr5_250x350.jpg"
            alt="FFF-rank trash hero"
            className="w-10 h-10"
         />
         <AvatarFallback className="text-center text-[8px]">FFF-rank trash hero</AvatarFallback>
      </Avatar>
   )
}