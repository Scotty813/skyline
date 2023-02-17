import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const Middle2Container = styled.div`
  position: absolute;
  left: 153px;
  top: 340px;
`
const LeftBuilding = styled.div`
  position: absolute;
  top: -12px;
  left: -15px;
  height: 40px;
  width: 30px;
  background: #646d75;
`
const VagueBeigeBuilding = styled.div`
  position: absolute;
  top: 1px;
  right: -24px;
  width: 10px;
  height: 20px;
  background: #788689;
`
export const Middle2 = () => {
  return (
    <Middle2Container>
      <VagueBeigeBuilding></VagueBeigeBuilding>
      <LeftBuilding>
        <Lights
          numLights={1}
          containerStyles={{
            position: "absolute",
            top: "3px",
            right: "5px",
          }}
          lightStyles={{
            width: "2px",
          }}
        />
      </LeftBuilding>
    </Middle2Container>
  )
}
