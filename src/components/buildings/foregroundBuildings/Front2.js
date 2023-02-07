import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front2Container = styled.div`
  position: absolute;
  bottom: 199px;
  left: 14px;
  width: 27px;
`
const FrontFace = styled.div`
  background: #5f4b44;
  height: 122px;
  clip-path: polygon(0 9%, 100% 15%, 100% 100%, 0 93%);
`

export const Front2 = () => {
  return (
    <Front2Container>
      <FrontFace></FrontFace>
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "24px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "9px",
          height: "9px",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "43px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "9px",
          height: "9px",
          borderRadius: "0",
        }}
      />
      <Doorways
        numDoors={2}
        containerStyles={{
          position: "absolute",
          top: "64px",
          left: "3px",
          transform: "skewY(9deg)",
          gap: "4px",
        }}
        doorStyles={{
          width: "9px",
          height: "9px",
          borderRadius: "0",
        }}
      />
    </Front2Container>
  )
}
