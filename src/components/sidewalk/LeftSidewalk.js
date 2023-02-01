import styled from "@emotion/styled/macro"

const Sidewalk = styled.div`
  position: relative;
  background: ${({ theme }) => theme.sidewalk};
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
  background: ${({ theme }) => theme.sidewalk};
`

export const LeftSidewalk = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "-162px",
        bottom: "148px",
        zIndex: -9999,
      }}
    >
      <Sidewalk>
        <SidewalkOverlay />
      </Sidewalk>
    </div>
  )
}
