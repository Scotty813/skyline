import { Back1 } from "./buildings/backgroundBuildings/Back1"
import { BackTall1 } from "./buildings/backgroundBuildings/BackTall1"
import { BackTall2 } from "./buildings/backgroundBuildings/BackTall2"
import { BackTall3 } from "./buildings/backgroundBuildings/BackTall3"
import { BackTall3Group } from "./buildings/backgroundBuildings/BackTall3Group"
import { BackTall4 } from "./buildings/backgroundBuildings/BackTall4"
import { BackTall5Group } from "./buildings/backgroundBuildings/BackTall5Group"
import { BackTall6Group } from "./buildings/backgroundBuildings/BackTall6Group"
import { BackTall7Group } from "./buildings/backgroundBuildings/BackTall7Group"
import { BackTall8Group } from "./buildings/backgroundBuildings/BackTall8Group"
import { BigBuildingRight } from "./buildings/foregroundBuildings/BigBuildingRight"
import { Front1 } from "./buildings/foregroundBuildings/Front1"
import { Front2 } from "./buildings/foregroundBuildings/Front2"
import { Front3 } from "./buildings/foregroundBuildings/Front3"
import { Front4 } from "./buildings/foregroundBuildings/Front4"
import { Front5 } from "./buildings/foregroundBuildings/Front5"
import { Front6 } from "./buildings/foregroundBuildings/Front6"
import { LeftSidewalk } from "./sidewalk/LeftSidewalk"
import { MainStreet } from "./street/MainStreet"
import { Middle1 } from "./buildings/middlegroundBuildings/Middle1"
import { Middle2 } from "./buildings/middlegroundBuildings/Middle2"
import { Middle3 } from "./buildings/middlegroundBuildings/Middle3"
import { MiddleBack } from "./buildings/middlegroundBuildings/MiddleBack"
import { RightBuildingSidewalk } from "./sidewalk/RightBuildingSidewalk"
import { Sky } from "./sky/Sky"

export const Skyline = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "auto",
        width: "551px",
        height: "731px",
      }}
    >
      <Sky />

      {/* Background Buildings */}
      <BackTall8Group />
      <BackTall7Group />
      <BackTall6Group />
      <BackTall5Group />
      <Back1 />
      <BackTall1 />
      <BackTall2 />
      <BackTall3Group />
      <BackTall3 />
      <BackTall4 />

      {/* MiddleGround */}
      {/* whatever */}
      <MiddleBack />
      {/*  Front Row */}
      <Middle3 />
      <Middle2 />
      <Middle1 />

      {/* Foreground */}
      <Front1 />
      <Front2 />
      <Front3 />
      <Front4 />
      <Front5 />
      <Front6 />

      <BigBuildingRight />
      <RightBuildingSidewalk />
      <MainStreet />
      <LeftSidewalk />
    </div>
  )
}
