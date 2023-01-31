import styled from "@emotion/styled"

const TopperDot = styled.div`
  position: absolute;
  top: -12px;
  right: 13px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #483b38;
`
const Topper = styled.div`
  position: absolute;
  top: -10px;
  right: -1px;
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 12px solid #483b38;
`
const Body = styled.div`
  height: 34px;
  width: 30px;
  border-radius: 2px;
  background: #404f60;
`
const Leg = styled.div`
  height: 35px;
  border-left: 2px solid #3d0b0e;
`

export const WaterThing = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "62px",
        top: "246px",
      }}
    >
      <TopperDot />
      <Topper />
      <Body />
      <div style={{ display: "flex" }}>
        <Leg style={{ transform: "rotate(8deg) translate(0px, 0px)" }} />
        <Leg style={{ transform: "rotate(353deg) translate(8px, 0px)" }} />
        <Leg style={{ transform: "rotate(8deg) translate(12px, -2px)" }} />
        <Leg style={{ transform: "rotate(355deg) translate(20px, 1px)" }} />
      </div>
    </div>
  )
}
