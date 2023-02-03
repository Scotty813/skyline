import { Lights } from "../../lights/Lights"
import styled from "@emotion/styled/macro"

const BackTall2Container = styled.div`
  position: absolute;
  top: 292px;
  left: 336px;
`
const BackTall2Building = styled.div`
  height: 66px;
  width: 52px;
  background: #404048;
  clip-path: polygon(
    29% 9%,
    40% 9%,
    40% 0,
    80% 0,
    81% 34%,
    92% 34%,
    92% 56%,
    100% 56%,
    100% 100%,
    12% 100%,
    12% 19%,
    29% 19%
  );
  padding-top: 15px;
`
const Antenna = styled.div`
  position: absolute;
  left: 24px;
  top: -11px;
  height: 12px;
  width: 1px;
  background: #21212a61;
`
const BuildingLeft = styled.div`
  position: absolute;
  top: 25px;
  left: 2px;
  background: #4e4656;
  height: 35px;
  width: 6px;
`
const BuildingSuperLeft = styled.div`
  position: absolute;
  width: 9px;
  height: 20px;
  left: -8px;
  top: 43px;
  background: #5a5c70;
`

export const BackTall2 = () => {
  return (
    <BackTall2Container>
      <BuildingSuperLeft />
      <BuildingLeft>
        <Lights numLights={3} />
      </BuildingLeft>
      <Antenna />
      <Antenna style={{ left: "38px", height: "14px", top: "-12px" }} />
      <BackTall2Building>
        <Lights
          numLights={2}
          containerStyles={{
            position: "absolute",
            left: "30px",
            top: "23px",
          }}
        />
        <Lights
          numLights={10}
          containerStyles={{
            position: "absolute",
            left: "17px",
            top: "30px",
          }}
        />
        <Lights
          numLights={10}
          containerStyles={{
            position: "absolute",
            left: "17px",
            top: "32px",
          }}
        />
        <Lights
          numLights={11}
          containerStyles={{
            position: "absolute",
            left: "17px",
            top: "44px",
          }}
        />
      </BackTall2Building>
    </BackTall2Container>
  )
}
