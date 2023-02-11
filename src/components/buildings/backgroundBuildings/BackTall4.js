import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall4Container = styled.div`
  position: absolute;
  top: 286px;
  left: 274px;
`
const Building = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28px;
  height: 70px;
`
const Topper = styled.div`
  position: absolute;
  left: 12px;
  top: -5px;
  height: 5px;
  width: 4px;
  border-radius: 4px 4px 0 0;
  background: #414055a8;
`
const BuildingTop = styled.div`
  width: 18px;
  height: 10px;
  background: #768a9b;
`
const BuildingBottom = styled.div`
  width: 100%;
  height: 100%;
  background: #657a85;
`
const Light = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  background: ${({ theme }) => theme.lights.smallLight};
`
const BottomRightSection = styled.div`
  position: absolute;
  display: flex;
  height: 42px;
  right: -18px;
  top: 39px;
`
const LeftSection = styled.div`
  width: 5px;
  background: #4b4c5d;
`
const RightSection = styled.div`
  width: 9px;
  background: #393b4c;
  margin-top: 3px;
`
const RightRightSection = styled.div`
  width: 4px;
  background: #5b5b5c;
  margin-top: 15px;
`
const BottomLeftSection = styled.div`
  position: absolute;
  top: 29px;
  left: -7px;
  display: flex;
  align-items: flex-end;
`

export const BackTall4 = () => {
  return (
    <BackTall4Container>
      <Light
        style={{
          top: "7px",
          right: "13px",
        }}
      />
      <Light
        style={{
          top: "7px",
          right: "10px",
        }}
      />
      <Light
        style={{
          top: "20px",
          right: "8px",
        }}
      />
      <Light
        style={{
          top: "30px",
          right: "8px",
        }}
      />
      <Topper />
      <BottomLeftSection>
        <div
          style={{ width: "2px", height: "3px", background: "#58434c" }}
        ></div>
        <div
          style={{ width: "2px", height: "11px", background: "#58434c" }}
        ></div>
        <div
          style={{ width: "3px", height: "15px", background: "#58434c" }}
        ></div>
        <Lights
          numLights={2}
          containerStyles={{ position: "absolute", bottom: "4px", right: 0 }}
        />
      </BottomLeftSection>
      <BottomRightSection>
        <LeftSection />
        <RightSection />
        <RightRightSection />
      </BottomRightSection>
      <Building>
        <BuildingTop />
        <BuildingBottom />
      </Building>
    </BackTall4Container>
  )
}
