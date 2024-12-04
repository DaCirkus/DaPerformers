import { CACCS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Button from "../Button"

const AttributeButtons = () => {
  const {
    cType,
    cAcc,
    cEye,
    cHair,
    cColor,
    cSkin,
    cOutFit,
    nextCType,
    prevCType,
    randomCType,
    randomCAcc,
    nextCAcc,
    prevCAcc,
    nextCEye,
    prevCEye,
    randomCEye,
    nextCColor,
    prevCColor,
    randomCColor,
    nextCHair,
    prevCHair,
    randomCHair,
    randomCOutFit,
    nextCOutFit,
    prevCOutFit,
    randomCSkin,
    prevCSkin,
    nextCSkin,
  } = useCharacter() as any

  return (
    <div
      className="flex flex-col 
      sm:gap-y-[4px] md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]
      sm:px-[8px] md:px-[18px] lg:px-[24px] xl:px-[30px]
      sm:items-start md:items-start"
    >
      <Button
        value={CACCS[cAcc]}
        label="Acc."
        onNext={nextCAcc}
        onPrev={prevCAcc}
        onRandom={randomCAcc}
      />
      <Button
        value={CEYES[cEye]}
        label="Eyes"
        onNext={nextCEye}
        onPrev={prevCEye}
        onRandom={randomCEye}
      />
      <Button
        value={CHAIRS[cHair]}
        label="Hair"
        onNext={nextCHair}
        onPrev={prevCHair}
        onRandom={randomCHair}
      />
      <Button
        value={CCOLORS[cColor]}
        label="Color"
        onNext={nextCColor}
        onPrev={prevCColor}
        onRandom={randomCColor}
      />
      <Button
        value={COUTFITS[cOutFit]}
        label="Outfit"
        onNext={nextCOutFit}
        onPrev={prevCOutFit}
        onRandom={randomCOutFit}
      />
      <Button
        value={CSKINS[cSkin]}
        label="Skin"
        onNext={nextCSkin}
        onPrev={prevCSkin}
        onRandom={randomCSkin}
      />
      <Button
        value={CTYPES[cType]}
        label="Type"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
    </div>
  )
}

export default AttributeButtons
