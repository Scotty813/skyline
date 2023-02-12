import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall6Container = styled.div`
  position: absolute;
  height: 100px;
  display: flex;
  top: 264px;
  left: 75px;
`
const BuildingLeft = styled.div`
  margin-top: 10px;
  transform: skew(0, -4deg);
  width: 10px;
  background: #47637a;
`
const BuildingRight = styled.div`
  padding-top: 2px;
  transform: skew(0, 4deg);
  width: 20px;
  background: #576677;
`

export const BackTall6Group = () => {
  return (
    <BackTall6Container>
      <BuildingLeft>
        <Lights numLights={3} containerStyles={{ marginTop: "5px" }} />
      </BuildingLeft>
      <BuildingRight>
        <Lights numLights={30} lightStyles={{ background: "black" }} />
        <Lights
          numLights={6}
          containerStyles={{ marginLeft: "6px", marginTop: "5px" }}
        />
        <Lights
          numLights={20}
          containerStyles={{ marginLeft: "1px", marginTop: "20px" }}
        />
      </BuildingRight>
    </BackTall6Container>
  )
}
