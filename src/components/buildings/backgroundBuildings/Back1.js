import styled from "@emotion/styled/macro"

const Back1Container = styled.div`
  position: absolute;
  top: 297px;
  left: 150px;
`
const Building = styled.div`
  height: 54px;
  width: 8px;
  background: #525666;
`

export const Back1 = () => {
  return (
    <Back1Container>
      <Building></Building>
    </Back1Container>
  )
}
