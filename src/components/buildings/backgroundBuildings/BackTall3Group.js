import styled from "@emotion/styled/macro"

const BackTall3GroupContainer = styled.div`
  position: absolute;
  display: flex;
  top: 292px;
  left: 226px;
`
const BuildingLeft = styled.div`
  width: 12px;
`
const BuildingLeftTop = styled.div`
  margin-top: 8px;
  transform: skew(0, -7deg);
  margin-left: 3px;
  background: #576266;
  height: 6px;
`
const BuildingLeftBottom = styled.div`
  height: 45px;
  background: #575753;
  transform: skew(0, -7deg);
`
const BuildingRight = styled.div`
  height: 60px;
  width: 10px;
  display: flex;
  & > div {
    flex: 1;
  }
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

const lights = Array(20)
const Lights = lights.fill(Light)

export const BackTall3Group = () => {
  return (
    <BackTall3GroupContainer>
      <BuildingLeft>
        <BuildingLeftTop />
        <BuildingLeftBottom>
          <LightsContainer>
            {Lights.slice(0, 12).map((Light, i) => (
              <Light key={i} />
            ))}
          </LightsContainer>

          <LightsContainer style={{ marginTop: "10px" }}>
            {Lights.slice(0, 6).map((Light, i) => (
              <Light key={i} />
            ))}
          </LightsContainer>

          <LightsContainer style={{ marginTop: "5px" }}>
            {Lights.slice(0, 15).map((Light, i) => (
              <Light key={i} />
            ))}
          </LightsContainer>
        </BuildingLeftBottom>
      </BuildingLeft>
      <BuildingRight>
        <div
          style={{ background: "#3f4657", transform: "skew(0, -34deg)" }}
        ></div>
        <div
          style={{ background: "#7f9197", transform: "skew(0, 30deg)" }}
        ></div>
      </BuildingRight>
    </BackTall3GroupContainer>
  )
}
