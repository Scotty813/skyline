import styled from "@emotion/styled"

const Sidewalk = styled.div`
  position: relative;
  background: #8c8177;
  height: 350px;
  width: 500px;
  transform: rotate(21deg);
  border-radius: 0 0 66px 0;
`

const SidewalkOverlay = styled.div`
  position: absolute;
  transform: rotate(42deg);
  bottom: 37px;
  right: -138px;
  height: 400px;
  width: 210px;
  background: #8c8177;
`

export const LeftSidewalk = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "-162px",
        bottom: "148px",
        zIndex: -5,
      }}
    >
      <Sidewalk>
        <SidewalkOverlay />
      </Sidewalk>
    </div>
  )
}
