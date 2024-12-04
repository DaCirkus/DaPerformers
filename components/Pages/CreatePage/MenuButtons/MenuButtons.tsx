import { STEPS } from "../../../../lib/createStep"
import { useCharacter } from "../../../../providers/CharacterProvider"
import { useCreate } from "../../../../providers/CreateProvider"
import Media from "../../../../shared/Media"
import HomeButton from "../../../HomeButton"
import MintButton from "../MintButton"

const MenuButtons = () => {
  const { setCurrentStep } = useCreate() as any
  const { randomAttr } = useCharacter() as any

  return (
    <div
      className="flex items-center sm:gap-x-[12px] md:gap-x-[18px] lg:gap-x-[24px] xl:gap-x-[30px]
          sm:px-[8px] md:px-[18px] lg:px-[24px] xl:px-[30px]
          sm:mt-4 md:mt-6"
    >
      <HomeButton onClick={() => setCurrentStep(STEPS.SELECT_CHARACTER)} />
      <button
        type="button"
        className="sm:w-[32px] md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
        onClick={() => randomAttr(1)}
      >
        <Media
          type="image"
          link="/images/Buttons/random.png"
          blurLink="/images/Buttons/random.png"
          containerClasses="sm:w-[24px] md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
        />
      </button>
      <MintButton />
    </div>
  )
}

export default MenuButtons
