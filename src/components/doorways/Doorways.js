import styled from "@emotion/styled/macro"

const DoorsContainer = styled.div`
  display: flex;
  gap: 2px;
  height: 24px;
`
const Door = styled.div`
  background: #080a09a3;
  width: 6px;
  border-radius: 12px 12px 0 0;
`

export const Doorways = ({
  containerStyles = {},
  doorStyles = {},
  numDoors = 0,
}) => {
  const lights = Array(numDoors)
  const Doors = lights.fill(Door)

  return (
    <DoorsContainer style={containerStyles}>
      {Doors.map((Door, i) => (
        <Door key={i} style={doorStyles} />
      ))}
    </DoorsContainer>
  )
}
