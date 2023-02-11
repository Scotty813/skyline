import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall5GroupContainer = styled.div`
  position: absolute;
  top: 274px;
  left: 99px;
`
const Building1 = styled.div`
  display: flex;
  height: 100px;
`
const Building2 = styled.div`
  position: absolute;
  top: 7px;
  left: -5px;
  display: flex;
  height: 100px;
`
const Topper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1px;
  position: absolute;
  top: -8px;
  left: 11px;
  width: 9px;
  height: 9px;
  background: #545c6d;
`
const Light = styled.div`
  height: 1px;
  width: 1px;
  background: ${({ theme }) => theme.lights.smallLight};
`
const BottomRightBuilding = styled.div`
  position: absolute;
  right: -10px;
  bottom: 44px;
`

export const BackTall5Group = () => {
  return (
    <BackTall5GroupContainer>
      <Topper>
        <Light />
        <Light />
        <Light />
      </Topper>

      <Building1>
        <div
          style={{
            width: "15px",
            background: "#2e3648",
            transform: "skew(0, -12deg)",
          }}
        ></div>
        <div
          style={{
            width: "24px",
            background: "#2e3648",
            transform: "skew(0, 7deg)",
          }}
        ></div>
      </Building1>
      <Lights
        numLights={4}
        containerStyles={{
          position: "absolute",
          right: "2px",
          top: "16px",
          transform: "skew(0, 7deg)",
        }}
      />
      <Lights
        numLights={4}
        containerStyles={{
          position: "absolute",
          right: "2px",
          top: "36px",
          transform: "skew(0, 7deg)",
        }}
      />

      <Building2>
        <div
          style={{
            width: "18px",
            background: "#646f74",
            transform: "skew(0, -8deg)",
          }}
        ></div>
        <div
          style={{
            width: "16px",
            background: "#4a545b",
            transform: "skew(0, 5deg)",
          }}
        ></div>
      </Building2>
      <Lights
        numLights={3}
        containerStyles={{
          position: "absolute",
          right: "14px",
          top: "10px",
        }}
      />
      <Lights
        numLights={1}
        containerStyles={{
          position: "absolute",
          right: "22px",
          top: "16px",
        }}
      />
      <Lights
        numLights={1}
        containerStyles={{
          position: "absolute",
          right: "23px",
          top: "20px",
        }}
      />
      <Lights
        numLights={2}
        containerStyles={{
          position: "absolute",
          right: "23px",
          top: "26px",
        }}
      />
      <Lights
        numLights={5}
        containerStyles={{
          position: "absolute",
          right: "16px",
          top: "45px",
        }}
      />
      <BottomRightBuilding>
        <div style={{ height: "4px", width: "8px", background: "#465769" }} />
        <div style={{ height: "10px", width: "10px", background: "#a0b0aa" }} />
      </BottomRightBuilding>
    </BackTall5GroupContainer>
  )
}
