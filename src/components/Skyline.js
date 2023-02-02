import { BackTall1 } from "./buildings/backgroundBuildings/BackTall1"
import { BackTall2 } from "./buildings/backgroundBuildings/BackTall2"
import { BackTall3 } from "./buildings/backgroundBuildings/BackTall3"
import { BackTall3Group } from "./buildings/backgroundBuildings/BackTall3Group"
import { BackTall4 } from "./buildings/backgroundBuildings/BackTall4"
import { BigBuildingRight } from "./buildings/foregroundBuildings/BigBuildingRight"
import { LeftSidewalk } from "./sidewalk/LeftSidewalk"
import { MainStreet } from "./street/MainStreet"
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
      <div style={{ boxSizing: "border-box" }}>
        <BackTall1 />
        <BackTall2 />
        <BackTall3Group />
        <BackTall3 />
        <BackTall4 />
      </div>

      {/* Foreground */}
      <BigBuildingRight />
      <RightBuildingSidewalk />
      <MainStreet />
      <LeftSidewalk />
    </div>
  )
}
