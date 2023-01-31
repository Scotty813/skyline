import { BigBuildingRight } from "./BigBuildingRight"
import { Sky } from "./Sky/Sky"

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
    </div>
  )
}
