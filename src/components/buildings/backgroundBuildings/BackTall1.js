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
    </BackTall1Container>
  )
}
