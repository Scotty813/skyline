import styled from "@emotion/styled"

const Main = styled.div`
  position: relative;
  height: 200px;
  width: 550px;
  transform: rotate(21deg);
  background: #736c59;
`
const Side = styled.div`
  position: absolute;
  transform: rotate(32deg);
  right: 124px;
  bottom: 155px;
  background: #736c59;
  height: 200px;
  width: 150px;
`

export const MainStreet = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-108px",
        left: "-71px",
        zIndex: "-6",
      }}
    >
      <Main>
        <Side />
      </Main>
    </div>
  )
}
