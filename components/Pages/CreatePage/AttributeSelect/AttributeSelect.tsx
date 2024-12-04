import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect } from "react"
import { CBGNAMES, CBGCOLORS } from "@/lib/character"
import AttributeButtons from "../AttributeButtons"
import MenuButtons from "../MenuButtons"
import Button from "../Button"
import Animation from "../CharacterModel/Animation"

const AttributeSelect = () => {
  const { randomAttr, cBG, nextCBG, prevCBG } = useCharacter() as any

  useEffect(() => {
    randomAttr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full grid grid-cols-2">
      <div
        className="flex flex-col justify-start 
          sm:gap-y-[8px] md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]
          sm:pl-[5%] md:pl-[10%]
          sm:pt-[5%] md:pt-[10%]"
      >
        <AttributeButtons />
        <MenuButtons />
      </div>
      <div className="relative 
        sm:pr-[5%] md:pr-[10%]
        sm:pt-[5%] md:pt-[10%]">
        <div
          className="absolute right-0 top-0 z-[10]
          flex items-center flex-col gap-0 w-full"
        >
          <Button className="!text-[32px]" label="Background" onNext={nextCBG} onPrev={prevCBG} />
          <p className="text-white font-slimfit sm:text-[10px] md:text-[12px] lg:text-[20px] xl:text-[24px]">
            {CBGNAMES[cBG]}
          </p>
        </div>
        <div
          className="absolute !h-2/3 
          sm:right-[8%] md:right-[12%] lg:right-[12%] xl:right-[12%]
          sm:top-[15%] md:top-[20%] lg:top-[20%] xl:top-[20%]
          sm:w-[calc(100%-16%)] md:w-[calc(100%-20%)] lg:w-[calc(100%-20%)] xl:w-[calc(100%-20%)] 
          sm:h-[calc(100%-14px)] md:h-[calc(100%-18px)] lg:h-[calc(100%-24px)] xl:h-[calc(100%-30px)]"
          style={{
            background: CBGCOLORS[cBG],
          }}
        />
        <div className="relative w-full h-full pointer-events-none">
          <div className="relative w-full h-full">
            <div
              className="absolute h-full 
              sm:w-[140px] md:w-[165px] lg:w-[220px] xl:w-[275px] overflow-hidden
              sm:right-[10%] md:right-[15%] lg:right-[15%] xl:right-[15%]
              sm:top-[20%] md:top-[25%] lg:top-[25%] xl:top-[25%]
              sm:scale-[0.8] md:scale-[0.9]"
            >
              <Animation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttributeSelect
