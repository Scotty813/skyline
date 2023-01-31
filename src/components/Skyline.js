import { BigBuildingRight } from "./BigBuildingRight"
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
        width: "550px",
        height: "730px",
        border: "1px solid black",
      }}
    >
      <Sky />
      <BigBuildingRight />
      <RightBuildingSidewalk />
      <MainStreet />
      <LeftSidewalk />
    </div>
  )
}
