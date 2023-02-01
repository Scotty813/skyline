import styled from "@emotion/styled/macro"

const BackTall3Container = styled.div`
  position: absolute;
  top: 255px;
  left: 244px;
`
const Building = styled.div`
  box-sizing: border-box;
  padding-top: 4px;
  height: 100px;
  width: 17px;
  background: #536c85;
`
const LightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`
const BlackLight = styled.div`
  height: 2px;
  width: 2px;
  background: #1e2733;
`
const Knob = styled.div`
  position: absolute;
  height: 4px;
  width: 2px;
  background: #536c85;
`

const lights = Array(50)
const Lights = lights.fill(BlackLight)

export const BackTall3 = () => {
  return (
    <BackTall3Container>
      <Knob
        style={{
          top: "4px",
          left: "-2px",
        }}
      />
      <Knob
        style={{
          top: "14px",
          left: "-2px",
        }}
      />

      <Knob
        style={{
          top: "22px",
          left: "-2px",
        }}
      />

      <Knob
        style={{
          top: "4px",
          right: "-2px",
        }}
      />
      <Knob
        style={{
          top: "10px",
          right: "-2px",
        }}
      />
      <Knob
        style={{
          top: "22px",
          right: "-2px",
        }}
      />
      <Knob
        style={{
          top: "28px",
          right: "-2px",
        }}
      />

      <Building>
        <div style={{ width: "10px", margin: "auto" }}>
          <LightsContainer>
            {Lights.slice(0, 30).map((Light, i) => (
              <Light key={i} />
            ))}
          </LightsContainer>
        </div>

        <div style={{ width: "10px", marginTop: "10px" }}>
          <LightsContainer>
            {Lights.slice(0, 30).map((Light, i) => (
              <Light key={i} />
            ))}
          </LightsContainer>
        </div>
      </Building>
    </BackTall3Container>
  )
}
