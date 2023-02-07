import { Doorways } from "../../doorways/Doorways"
import styled from "@emotion/styled/macro"

const Front4Container = styled.div`
  position: absolute;
  bottom: 164px;
  left: 108px;
  width: 41px;
`
const RedPart = styled.div`
  background: #46302b;
  height: 164px;
  clip-path: polygon(0 3%, 100% 8%, 100% 100%, 0 92%);
`
const TopPart = styled.div`
  position: relative;
  background: #0e0a07;
  height: 9px;
  transform: skewY(10deg);
  top: 10px;
`
export const Front4 = () => {
  return (
    <Front4Container>
      <TopPart />
      <RedPart />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "28px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "55px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "82px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
      <Doorways
        numDoors={3}
        containerStyles={{
          gap: "4px",
          position: "absolute",
          top: "110px",
          left: "7px",
          height: "15px",
          transform: "skewY(9deg)",
        }}
        doorStyles={{ borderRadius: 0, width: "6px" }}
      />
    </Front4Container>
  )
}
