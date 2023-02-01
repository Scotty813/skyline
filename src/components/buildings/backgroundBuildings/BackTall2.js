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
  left: 22px;
  top: -14px;
  height: 14px;
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

const lights = Array(50)
const Lights = lights.fill(Light)

export const BackTall2 = () => {
  return (
    <BackTall2Container>
      <Antenna />
      <Antenna style={{ left: "34px" }} />
      <BackTall2Building>
        <LightsContainer
          style={{ position: "absolute", left: "30px", top: "23px" }}
        >
          {Lights.slice(0, 2).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer
          style={{ position: "absolute", left: "17px", top: "30px" }}
        >
          {Lights.slice(0, 10).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>
        <LightsContainer
          style={{ position: "absolute", left: "17px", top: "32px" }}
        >
          {Lights.slice(0, 10).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>

        <LightsContainer
          style={{ position: "absolute", left: "17px", top: "44px" }}
        >
          {Lights.slice(0, 11).map((Light, i) => (
            <Light key={i} />
          ))}
        </LightsContainer>
      </BackTall2Building>
    </BackTall2Container>
  )
}
