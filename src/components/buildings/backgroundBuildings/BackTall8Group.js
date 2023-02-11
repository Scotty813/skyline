import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall8Container = styled.div`
  position: absolute;
  display: flex;
  height: 60px;
  top: 292px;
`
const BuildingLeft = styled.div`
  transform: skew(0, 4deg);
  background: #191d2e;
  width: 12px;
  margin-top: 2px;
`
const BuildingRight = styled.div`
  transform: skew(0, 2deg);
  background: #2d3a4c;
  width: 9px;
`

export const BackTall8Group = () => {
  return (
    <BackTall8Container>
      <BuildingLeft>
        <Lights
          numLights={4}
          containerStyles={{ marginTop: "9px", justifyContent: "flex-end" }}
        />
        <Lights
          numLights={4}
          containerStyles={{ marginTop: "6px", justifyContent: "space-around" }}
        />
        <Lights
          numLights={4}
          containerStyles={{ marginTop: "9px", justifyContent: "flex-end" }}
        />
      </BuildingLeft>
      <BuildingRight></BuildingRight>
    </BackTall8Container>
  )
}
