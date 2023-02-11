import styled from "@emotion/styled/macro"

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

export const Lights = ({
  containerStyles = {},
  lightStyles = {},
  numLights = 0,
}) => {
  const lights = Array(numLights)
  const Lights = lights.fill(Light)

  return (
    <LightsContainer style={containerStyles}>
      {Lights.map((Light, i) => (
        <Light key={i} style={lightStyles} />
      ))}
    </LightsContainer>
  )
}
