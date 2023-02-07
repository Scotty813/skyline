import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front5Container = styled.div`
  position: absolute;
  bottom: 149px;
  left: 148px;
  width: 50px;
`
const RedPart = styled.div`
  background: #48211a;
  height: 142px;
  clip-path: polygon(0 3%, 100% 8%, 100% 100%, 0 89%);
`
const TopPart = styled.div`
  background: #0e0a07;
  height: 7px;
  transform: skewY(9deg);
  position: relative;
  top: 8px;
`

export const Front5 = () => {
  return (
    <Front5Container>
      <TopPart />
      <RedPart />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "19px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#ce9321" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "48px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#78786c" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          height: "16px",
          gap: "5px",
          position: "absolute",
          top: "76px",
          left: "14px",
          transform: "skewY(8deg)",
        }}
        doorStyles={{ width: "4px", borderRadius: 0, background: "#272521" }}
      />
    </Front5Container>
  )
}
