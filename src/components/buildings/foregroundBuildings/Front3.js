import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front3Container = styled.div`
  position: absolute;
  bottom: 177px;
  left: 41px;
  width: 68px;
`
const WhitePart = styled.div`
  background: #8d8d95;
  height: 98px;
  clip-path: polygon(0 3%, 100% 15%, 100% 100%, 0 76%);
`
const TopPart = styled.div`
  position: relative;
  background: #616977;
  height: 7px;
  transform: skewY(10deg);
  top: 10px;
`

export const Front3 = () => {
  return (
    <Front3Container>
      <TopPart />
      <WhitePart />
      <Doorways
        numDoors={4}
        containerStyles={{
          position: "absolute",
          top: "24px",
          left: "6px",
          gap: "10px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{
          height: "10px",
          width: "6px",
          borderRadius: 0,
        }}
      />
      <Doorways
        numDoors={4}
        containerStyles={{
          position: "absolute",
          top: "45px",
          left: "6px",
          gap: "10px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{
          height: "10px",
          width: "6px",
          borderRadius: 0,
        }}
      />
    </Front3Container>
  )
}
