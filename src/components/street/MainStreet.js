import styled from "@emotion/styled"

const Main = styled.div`
  position: relative;
  height: 200px;
  width: 550px;
  transform: rotate(21deg);
  background: #736c59;
`

export const MainStreet = () => {
  return (
    <div style={{ position: "absolute", bottom: "-108px", left: "-71px" }}>
      <Main />
    </div>
  )
}
