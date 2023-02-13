import { Lights } from "../../doorways/Lights"
import styled from "@emotion/styled/macro"

const BackTall1Container = styled.div`
  position: absolute;
  top: 240px;
  left: 151px;
`
const BackTall1Building = styled.div`
  height: 120px;
  width: 40px;
  background: #3c5575;
  clip-path: polygon(39% 0, 69% 0, 76% 100%, 31% 100%);
`
const Antenna = styled.div`
  position: absolute;
  left: 21px;
  top: -26px;
  height: 27px;
  width: 1px;
  background: #21212a61;
`
const LightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`
const Light = styled.div`
  height: 1px;
  width: 1px;
  background: ${({ theme }) => theme.lights.smallLight};
`
const FlatLight = styled.div`
  height: 1px;
  width: 3px;
  background: ${({ theme }) => theme.lights.smallLight};
`

const flatLights = Array(40)
const FlatLightsArr = flatLights.fill(FlatLight)

const lightsGroup1 = Array(500)
const LightsGroup1Arr = lightsGroup1.fill(Light)

const FrontLeftBuilding = styled.div`
  position: absolute;
  transform: skewY(4deg);
  top: 57px;
  left: 8px;
  height: 50px;
  width: 15px;
  background: #182131;
`
const FrontRightBuilding = styled.div`
  display: flex;
  position: absolute;
  height: 80px;
  top: 49px;
  right: -19px;
`
const BlackTopper = styled.div`
  position: absolute;
  top: -3px;
  left: 5px;
  transform: skewY(4deg);
  width: 4px;
  height: 4px;
  background: #182131;
`
const BackRightBuilding = styled.div`
  position: absolute;
  top: 62px;
  right: -23px;
  height: 50px;
  width: 20px;
  background: #83868d;
  clip-path: polygon(87% 0, 87% 10%, 100% 10%, 100% 100%, 0 100%, 0 0);
`

export const BackTall1 = () => {
  return (
    <BackTall1Container>
      <Antenna />
      <BackTall1Building>
        <LightsContainer style={{ marginTop: "2px" }}>
          {FlatLightsArr.map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "19px" }}>
          {LightsGroup1Arr.slice(0, 11).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "3px" }}>
          {LightsGroup1Arr.slice(0, 20).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "6px" }}>
          {LightsGroup1Arr.slice(0, 10).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "1px" }}>
          {LightsGroup1Arr.slice(0, 9).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "8px" }}>
          {LightsGroup1Arr.slice(0, 9).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>
        <LightsContainer style={{ marginTop: "1px" }}>
          {LightsGroup1Arr.slice(0, 9).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer style={{ marginTop: "10px" }}>
          {LightsGroup1Arr.slice(0, 300).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>
      </BackTall1Building>
      <FrontLeftBuilding>
        <BlackTopper />
        <Lights
          numLights={1}
          containerStyles={{
            position: "absolute",
            top: "2px",
            left: "3px",
          }}
        />
        <Lights
          numLights={1}
          containerStyles={{
            position: "absolute",
            top: "3px",
            left: "9px",
          }}
        />
        <Lights
          numLights={2}
          containerStyles={{
            position: "absolute",
            top: "8px",
            left: "3px",
          }}
        />
        <Lights
          numLights={3}
          containerStyles={{
            position: "absolute",
            top: "14px",
            left: "3px",
          }}
        />
        <Lights
          numLights={2}
          containerStyles={{
            position: "absolute",
            top: "22px",
            left: "3px",
          }}
        />
      </FrontLeftBuilding>
      <BackRightBuilding />
      <FrontRightBuilding>
        <div
          style={{
            position: "absolute",
            width: "13px",
            height: "100%",
            left: "-12px",
            top: "-1px",
            background: "#404754",
            transform: "skewY(-1deg)",
            borderRadius: "0 2px 0 0",
          }}
        />
        <Lights
          numLights={12}
          containerStyles={{
            position: "absolute",
            transform: "skewY(-1deg)",
            width: "8px",
            top: "2px",
            left: "-10px",
            gap: "1px",
          }}
          lightStyles={{
            height: "1px",
            width: "1px",
            background: "black",
          }}
        />
        <div
          style={{
            width: "19px",
            background: "#484c5b",
            transform: "skewY(5deg)",
          }}
        />
        <Lights
          numLights={18}
          containerStyles={{
            position: "absolute",
            transform: "skewY(5deg)",
            width: "12px",
            top: "2px",
            right: "2px",
            gap: "1px",
          }}
          lightStyles={{
            height: "1px",
            width: "1px",
            background: "black",
          }}
        />
      </FrontRightBuilding>
    </BackTall1Container>
  )
}
