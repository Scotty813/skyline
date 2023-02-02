import { Lights } from "../../lights/Lights"
import styled from "@emotion/styled/macro"

const BackTall7Container = styled.div`
  position: absolute;
  display: flex;
  height: 80px;
  left: 29px;
  top: 286px;
`
const BuildingRight = styled.div`
  position: absolute;
  height: 100%;
  right: -8px;
  width: 10px;
  background: #6a7588;
`
const BuildingMiddle = styled.div`
  margin-top: 4px;
  transform: skew(0, 4deg);
  width: 26px;
  background: #26303f;
`
const BuildingLeft = styled.div`
  transform: skew(0, 5deg);
  width: 8px;
  background: #4a5060;
  margin-right: 2px;
`

export const BackTall7Group = () => {
  return (
    <BackTall7Container>
      <BuildingLeft>
        <Lights
          numLights={2}
          containerStyles={{ marginTop: "13px", marginLeft: "1px" }}
        />
      </BuildingLeft>
      <BuildingRight>
        <Lights
          numLights={3}
          containerStyles={{
            flexDirection: "column",
            marginLeft: "6px",
            marginTop: "2px",
          }}
          lightStyles={{
            background: "black",
          }}
        />
      </BuildingRight>
      <BuildingMiddle>
        <Lights
          numLights={3}
          containerStyles={{ justifyContent: "space-between", margin: "4px" }}
        />
        <Lights
          numLights={10}
          containerStyles={{ marginTop: "4px", marginLeft: "1px" }}
        />
        <Lights
          numLights={12}
          containerStyles={{ marginTop: "12px", marginLeft: "1px" }}
        />
      </BuildingMiddle>
    </BackTall7Container>
  )
}
