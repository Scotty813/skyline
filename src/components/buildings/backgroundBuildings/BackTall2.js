import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall2Container = styled.div`
  position: absolute;
  top: 292px;
  left: 336px;
`
const BackTall2Building = styled.div`
  height: 66px;
  width: 54px;
  background: #404048;
  clip-path: polygon(
    29% 9%,
    40% 9%,
    40% 0,
    80% 0,
    81% 27%,
    92% 27%,
    92% 41%,
    100% 41%,
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
const SomeVagueBuilding = styled.div`
  position: absolute;
  bottom: 15px;
  right: -24px;
  width: 30px;
  height: 30px;
  background: #6885a0;
  clip-path: polygon(22% 27%, 22% 0, 100% 0, 100% 100%, 0 100%, 0 28%);
`
const SuperBackBuilding = styled.div`
  position: absolute;
  top: 10px;
  right: -39px;
  width: 24px;
  height: 22px;
  background: #494e60;
  clip-path: polygon(
    19% 23%,
    37% 23%,
    37% 10%,
    54% 0,
    92% 27%,
    92% 45%,
    93% 100%,
    0 100%,
    0 47%,
    19% 45%
  );
`

export const BackTall2 = () => {
  return (
    <BackTall2Container>
      <SuperBackBuilding>
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "7px",
            left: "8px",
            gap: "3px",
          }}
        />
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "9px",
            left: "8px",
            gap: "3px",
          }}
        />
      </SuperBackBuilding>
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
      <SomeVagueBuilding />
    </BackTall2Container>
  )
}
