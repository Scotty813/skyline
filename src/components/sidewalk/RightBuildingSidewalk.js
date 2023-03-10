import styled from "@emotion/styled/macro"

const Sidewalk = styled.div`
  background: ${({ theme }) => theme.sidewalk};
  height: 96px;
  width: 375px;
  border: 1px solid ${({ theme }) => theme.sidewalk};
  transform: rotate(21deg);
  border-radius: 0px 0px 0px 34px;
  border-left: transparent;
  border-top: transparent;
`
const SidewalkOverlay = styled.div`
  position: absolute;
  top: -129px;
  left: 35px;
  transform: rotate(57deg);
  height: 144px;
  border-right: 40px solid ${({ theme }) => theme.street};
`

export const RightBuildingSidewalk = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-18px",
        right: "-155px",
        zIndex: "-1",
      }}
    >
      <Sidewalk></Sidewalk>
      <SidewalkOverlay />
    </div>
  )
}
